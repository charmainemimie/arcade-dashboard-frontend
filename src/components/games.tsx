"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Edit } from "lucide-react";

const initialGames = [
  {
    id: 1,
    name: "Street Fighter VI",
    category: "Fighting",
    status: "Active",
    price: "$2.00",
    img: "placeholder.jpg",
  },
  {
    id: 2,
    name: "Pac-Man",
    category: "Classic",
    status: "Active",
    price: "$1.50",
    img: "placeholder.jpg",
  },
  {
    id: 3,
    name: "Tekken 8",
    category: "Fighting",
    status: "Active",
    price: "$2.50",
    img: "placeholder.jpg",
  },
  {
    id: 4,
    name: "Galaga",
    category: "Classic",
    status: "Maintenance",
    price: "$1.50",
    img: "placeholder.jpg",
  },
  {
    id: 5,
    name: "Mortal Kombat",
    category: "Fighting",
    status: "Active",
    price: "$2.00",
    img: "placeholder.jpg",
  },
];

export function Games() {
  const [games, setGames] = useState(initialGames);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGame, setNewGame] = useState({
    name: "",
    category: "",
    price: "",
    img: "",
  });

  const handleAddGame = () => {
    if (newGame.name && newGame.category && newGame.price) {
      const game = {
        id: games.length + 1,
        name: newGame.name,
        category: newGame.category,
        status: "Active",
        price: newGame.price,
        img: newGame.img,
      };
      setGames([...games, game]);
      setNewGame({ name: "", category: "", price: "", img: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteGame = (id: number) => {
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Games Management</h1>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Game
        </Button>
      </div>

      {showAddForm && (
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
                  value={newGame.name}
                  onChange={(e) =>
                    setNewGame({ ...newGame, name: e.target.value })
                  }
                  placeholder="Enter game name"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={newGame.category}
                  onChange={(e) =>
                    setNewGame({ ...newGame, category: e.target.value })
                  }
                  placeholder="e.g., Fighting, Classic"
                />
              </div>
              <div>
                <Label htmlFor="price">Price per Play</Label>
                <Input
                  id="price"
                  value={newGame.price}
                  onChange={(e) =>
                    setNewGame({ ...newGame, price: e.target.value })
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
                  value={newGame.img}
                  onChange={(e) =>
                    setNewGame({ ...newGame, img: e.target.value })
                  }
                  placeholder="Choose game image"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddGame}>Add Game</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>All Games</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Game Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {games.map((game) => (
                <TableRow key={game.id}>
                  <TableCell className="font-medium">{game.name}</TableCell>
                  <TableCell>{game.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        game.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {game.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{game.price}</TableCell>
                  <TableCell>
                    <img
                      src={game.img}
                      alt={game.name}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteGame(game.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
