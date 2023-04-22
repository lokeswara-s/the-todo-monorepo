export class Http {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const json = await response.json();
    return json as T;
  }

  async post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json as T;
  }

  async put<T>(url: string, data: any): Promise<T> {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json as T;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const json = await response.json();
    return json as T;
  }
}
