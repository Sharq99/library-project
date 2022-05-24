import { makeAutoObservable } from "mobx";
import axios from "axios";

class MemberStore {
  constructor() {
    makeAutoObservable(this);
  }

  members = [];

  fetchMember = async () => {
    try {
      const response = await axios.get("https://library-borrow-system.herokuapp.com/api/members");
      this.members = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createMember = async (member) => {
    try {
      const response = await axios.post("https://library-borrow-system.herokuapp.com/api/members", member);
      this.members.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  borrowBook = async (bookId, memberId) => {
    try {
      await axios.put(`https://library-borrow-system.herokuapp.com/api/books/${bookId}/borrow/${memberId}`);
    } catch (error) {
      console.error(error);
    }
  };
}

const membersStore = new MemberStore();
membersStore.fetchMember();

export default membersStore;
