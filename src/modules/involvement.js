// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QaiC71NWlHq0cfCgEPcq/comments
class Involvement {
  constructor() {
    this.id = '0I1gsmjKECA6HGAxhWHD';
    this.baseURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.id}/`;
  }

  addLike = async (country) => {
    try {
      await fetch(`${this.baseURL}likes`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: country,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  getLikeAmount = async (country) => {
    const all = await this.getAllLikeInfo();
    let result = await all.find((obj) => obj.item_id === country);
    result = parseInt(result.likes, 10);
    return result || 0;
  };

  getAllLikeInfo = async () => {
    const likes = await fetch(`${this.baseURL}likes`);
    const data = await likes.json();
    return [...data];
  };

  addComment = async (country, currentDate, username, comment) => {
    try {
      await fetch(`${this.baseURL}comments`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: country,
          date: currentDate,
          username,
          comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  getComment = async (country) => {
    const res = await fetch(`${this.baseURL}comments?item_id=${country}`);
    const data = await res.json();

    if (Array.isArray(data)) {
      return data;
    }
    return [];
  };
}

export default Involvement;
