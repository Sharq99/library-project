import { makeAutoObservable } from "mobx";
import axios from "axios";

class MemberStore {
  constructor() {
    makeAutoObservable(this);
  }

  members = [];

  fetchMember = async () => {
    try {
      const response = await axios.get(
        "https://library-borrow-system.herokuapp.com/api/members"
      );
      this.members = response.data;

      //   console.log(testing);
      //   console.log("Member: " + JSON.stringify(this.members));
    } catch (error) {
      console.error(error);
    }
  };

  //   generateIDN = (length) => {
  //     const characters = "0123456789";
  //     let result = "";
  //     const charactersLength = characters.length;
  //     for (let i = 0; i < length; i++) {
  //       result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     }
  //     return result;
  //   };

  //   generateIDL = (length) => {
  //     const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  //     let result = "";
  //     const charactersLength = characters.length;
  //     for (let i = 0; i < length; i++) {
  //       result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     }
  //     return result;
  //   };

  createMember = async (member) => {
    // let s1 = member.firstName.toLowerCase();
    // let s2 = member.lastName.toLowerCase();
    // let result = s1.concat("-", s2);

    // member._id = this.generateID(24);
    // member._id = Date.now() + member.firstName; //+this.generateIDL(1); //628514d5b8273a86534c95b
    // console.log("id: " + member._id);
    // console.log("IM THE MEMBERRR: " + member.firstName);
    // member.slug = result;
    // console.log("slug: " + member.slug);
    // member._id = "vvvvvvvvvvvvvvvvvvvvvvvv";

    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/members",
        member
      );
      this.members.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  borrowBook = async (bookId, memberId) => {
    // const member = this.members.find((m) => m._id === memberId);
    // member.currentlyBorrowingborrowedBy.push(memberId);
    try {
      await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${bookId}/borrow/${memberId}`
      );
    } catch (error) {
      console.error(error);
    }
  };
}

const membersStore = new MemberStore();
membersStore.fetchMember();

export default membersStore;
