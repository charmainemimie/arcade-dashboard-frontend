import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const backendURL = import.meta.env.VITE_ONLINE_API_URL || import.meta.env.VITE_LOCAL_API_URL;

export const GameForm = ({
  setShowAddForm,
}: {
  
  handleAddGame?: () => void; // Made optional as it wasn't being used
  setShowAddForm: (show: boolean) => void;
}) => {
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    status: "",
    image: "",
    rating: 0,
  });
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files?.[0] || null);
  };

  const handleSubmit = async () => {
    try {
        let imageUrl = "";

        if (image) {
            imageUrl = await uploadImageToCloudinary(image);
        } else {
            // Handle case where no image is selected,
            // or simply return early if an image is required.
            alert("Please select an image file.");
            return;
        }

        // Add a check for other required fields before posting
        if (!gameData.name || !gameData.price || !gameData.category || !gameData.status || !imageUrl) {
            alert("Please fill in all required fields.");
            return;
        }
        console.log("Sending to backend:", {
          ...gameData,
          image: imageUrl,
        });

        const res = await axios.post(`${backendURL}/games`, {
            ...gameData,
            image: imageUrl,
        });
        alert("Game added successfully");
        console.log("Game uploaded:", res.data);
        setShowAddForm(false);
      }catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error:", err.message);
        } else {
          console.error("Unknown error:", err);
        }
      
      
    }

};


  const uploadImageToCloudinary = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    

    const CLOUDNAME = import.meta.env.VITE_CLOUD_NAME;
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`,
      formData
    );

    return res.data.secure_url;
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
              type="number" // Changed to number for price
              value={gameData.price}
              onChange={(e) =>
                setGameData({ ...gameData, price: e.target.value })
              }
              placeholder="e.g., $2.00"
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
              placeholder="e.g., Available, Coming Soon"
            />
          </div>
          <div>
            <Label htmlFor="rating">Rating</Label>
            <Input
              id="rating"
              type="number" // Changed to number for rating
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
            <Input // Using Input for simplicity, you could use a textarea
              id="description"
              value={gameData.description}
              onChange={(e) =>
                setGameData({ ...gameData, description: e.target.value })
              }
              placeholder="Enter a brief description of the game"
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