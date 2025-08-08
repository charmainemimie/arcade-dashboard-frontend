"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Trash2, Edit } from "lucide-react";
import { apiService, type Game } from "@/services/api";
import GameForm from "./add-game-form";

export function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingGame, setEditingGame] = useState<Game | null>(null);

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

  const handleGameAdded = (newGame: Game) => {
    setGames((prevGames) => [...prevGames, newGame]); // Add to bottom
  };

  const handleGameUpdated = (updatedGame: Game) => {
    setGames((prevGames) =>
      prevGames.map((game) => (game._id === updatedGame._id ? updatedGame : game))
    );
  };

  const handleDeleteGame = async (_id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this game?");
    if (!confirmDelete) return;

    try {
      await apiService.deleteGame(_id);
      setGames((prevGames) => prevGames.filter((game) => game._id !== _id));
      alert("Game deleted successfully");
    } catch (err) {
      setError("Failed to delete game");
      console.error("Error deleting game:", err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Games Management</h1>
        <Button onClick={() => { setEditingGame(null); setShowAddForm(true); }}>
          <Plus className="h-4 w-4 mr-2" />
          Add Game
        </Button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">Loading games...</p>
        </div>
      ) : (
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
                  <TableRow key={game._id}>
                    <TableCell className="font-medium">{game.name}</TableCell>
                    <TableCell>{game.category}</TableCell>
                    <TableCell>{game.status}</TableCell>
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
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingGame(game);
                            setShowAddForm(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteGame(game._id)}
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
      )}

      {showAddForm && (
        <GameForm
          setShowAddForm={setShowAddForm}
          onGameAdded={handleGameAdded}
          onGameUpdated={handleGameUpdated}
          existingGameData={editingGame}
        />
      )}
    </div>
  );
}
