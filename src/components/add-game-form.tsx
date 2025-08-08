import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { Game } from "@/services/api";

const backendURL =
  import.meta.env.VITE_ONLINE_API_URL || import.meta.env.VITE_LOCAL_API_URL;

const GameForm = ({
  setShowAddForm,
  existingGameData,
  onGameAdded,
  isEdit = false,
}: {
  setShowAddForm: (show: boolean) => void;
  existingGameData?: Game;
  isEdit?: boolean;
  onGameAdded?: (newGame: Game) => void;
}) => {
  const [gameData, setGameData] = useState({
    name: existingGameData?.name || "",
    description: existingGameData?.description || "",
    price: existingGameData?.price || "",
    category: existingGameData?.category || "",
    status: existingGameData?.status || "",
    image: existingGameData?.image || "",
    rating: existingGameData?.rating || 0,
  });

  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImageToCloudinary = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    const CLOUDNAME = import.meta.env.VITE_CLOUD_NAME;
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`,
      formData
    );

    return res.data.secure_url;
  };

  const handleSubmit = async () => {
    try {
      let imageUrl = gameData.image;

      if (image) {
        imageUrl = await uploadImageToCloudinary(image);
      }

      const payload = {
        ...gameData,
        image: imageUrl,
      };

      if (isEdit && existingGameData?._id) {
        await axios.put(`${backendURL}/games/${existingGameData._id}`, payload);
        alert("Game updated successfully!");
      } else {
        const response = await axios.post(`${backendURL}/games`, payload);
        alert("Game added successfully!");

        // Call the callback to update parent state
        if (onGameAdded) {
          onGameAdded(response.data); // assuming backend returns the created game object
        }
      }

      setShowAddForm(false);
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEdit ? "Edit Game" : "Add New Game"}</CardTitle>
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
              type="number"
              value={gameData.price}
              onChange={(e) =>
                setGameData({ ...gameData, price: e.target.value })
              }
              placeholder="e.g., 2.00"
            />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Input
              id="status"
              value={gameData.status}
              onChange={(e) =>
                setGameData({ ...gameData, status: e.target.value })
              }
              placeholder="Available, Coming Soon"
            />
          </div>
          <div>
            <Label htmlFor="rating">Rating</Label>
            <Input
              id="rating"
              type="number"
              value={gameData.rating}
              onChange={(e) =>
                setGameData({ ...gameData, rating: Number(e.target.value) })
              }
              placeholder="e.g., 4.5"
            />
          </div>
          <div>
            <Label htmlFor="img">Image</Label>
            <Input
              type="file"
              id="img"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={gameData.description}
              onChange={(e) =>
                setGameData({ ...gameData, description: e.target.value })
              }
              placeholder="Enter a brief description"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSubmit}>
            {isEdit ? "Update Game" : "Add Game"}
          </Button>
          <Button variant="outline" onClick={() => setShowAddForm(false)}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameForm;
