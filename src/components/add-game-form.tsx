import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const backendURL = import.meta.env.ONLINE_API_URL;

export const GameForm = ({
  setShowAddForm,
}: {
  handleAddGame: () => void;
  setShowAddForm: (show: boolean) => void;
}) => {
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    status: "",
    rating: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files?.[0] || null);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in gameData) {
      formData.append(key, gameData[key as keyof typeof gameData]);
    }
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await axios.post(`${backendURL}/games`, formData, {
        headers: { "Content-Type": "multipart/form-data" }, 
      });
      console.log("Game uploaded:", res.data);
      setShowAddForm(false);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Game</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="name">Game Name</Label>
            <Input
              id="name"
              value={gameData.name}
              onChange={(e) =>
                setGameData({ ...gameData, name: e.target.value })
              }
              placeholder="Enter game name"
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={gameData.category}
              onChange={(e) =>
                setGameData({ ...gameData, category: e.target.value })
              }
              placeholder="e.g., Fighting, Classic"
            />
          </div>
          <div>
            <Label htmlFor="price">Price per Play</Label>
            <Input
              id="price"
              value={gameData.price}
              onChange={(e) =>
                setGameData({ ...gameData, price: e.target.value })
              }
              placeholder="e.g., $2.00"
            />
          </div>
          <div>
            <Label htmlFor="img">Image</Label>
            <Input
              type="file"
              id="img"
              accept="image/*"
              onChange={handleImageChange}
              placeholder="Choose game image"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSubmit}>Add Game</Button>
          <Button variant="outline" onClick={() => setShowAddForm(false)}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameForm;
