const API_BASE_URL =
  import.meta.env.VITE_ONLINE_API_URL ||
  import.meta.env.VITE_LOCAL_API_URL

export interface Game {
  id: number;
  name: string;
  category: string;
  status: string;
  price: string;
  image: string;
  rating: number;
  description: string;
}

export interface CreateGameData {
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
  status: string;
  image: string;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Games API
  async getGames(): Promise<Game[]> {
    return this.request<Game[]>("/games");
  }

  async createGame(gameData: CreateGameData): Promise<Game> {
    return this.request<Game>("/games", {
      method: "POST",
      body: JSON.stringify(gameData),
    });
  }

  async updateGame(
    id: number,
    gameData: Partial<CreateGameData>
  ): Promise<Game> {
    return this.request<Game>(`/games/${id}`, {
      method: "PUT",
      body: JSON.stringify(gameData),
    });
  }

  async deleteGame(id: number): Promise<void> {
    return this.request<void>(`/games/${id}`, {
      method: "DELETE",
    });
  }

  // Upload image
  async uploadImage(file: File): Promise<{ url: string }> {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`${this.baseUrl}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed! status: ${response.status}`);
    }

    return response.json();
  }
}

export const apiService = new ApiService();
