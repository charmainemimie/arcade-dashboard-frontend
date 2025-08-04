"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import GameForm from "./add-game-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Trash2, Edit } from "lucide-react";
import { apiService, type Game, type CreateGameData } from "@/services/api";

export function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGame, setNewGame] = useState<CreateGameData>({
    name: "",
    category: "",
    description: "",
    rating: 0,
    status: "",
    price: "",
    image: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Load games from API
  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      setLoading(true);
      const gamesData = await apiService.getGames();
      setGames(gamesData);
      setError(null);
    } catch (err) {
      setError("Failed to load games");
      console.error("Error loading games:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddGame = async () => {
    if (newGame.name && newGame.category && newGame.price) {
      try {
        let imageUrl = newGame.image;

        // Upload image if file is selected
        if (selectedFile) {
          const uploadResult = await apiService.uploadImage(selectedFile);
          imageUrl = uploadResult.url;
        }

        const gameData: CreateGameData = {
          name: newGame.name,
          description: newGame.description,
          image: imageUrl,
          price: newGame.price,
          category: newGame.category,
          rating: newGame.rating,
          status: newGame.status,
        };

        const createdGame = await apiService.createGame(gameData);
        setGames([...games, createdGame]);
        setNewGame({
          name: "",
          category: "",
          price: "",
          image: "",
          description: "",
          rating: 0,
          status: "",
        });
        setSelectedFile(null);
        setShowAddForm(false);
      } catch (err) {
        setError("Failed to add game");
        console.error("Error adding game:", err);
      }
    }
  };

  const handleDeleteGame = async (id: number) => {
    try {
      await apiService.deleteGame(id);
      setGames(games.filter((game) => game.id !== id));
    } catch (err) {
      setError("Failed to delete game");
      console.error("Error deleting game:", err);
    }
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

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">Loading games...</p>
        </div>
      )}

      {showAddForm && (
        <GameForm
          handleAddGame={handleAddGame}
          setShowAddForm={setShowAddForm}
        />
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

                      {game.status}
                  
                  </TableCell>
                  <TableCell>{game.price}</TableCell>
                  <TableCell>
                    <img
                      src={game.image}
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
