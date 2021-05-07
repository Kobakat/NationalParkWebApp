import { usersCollection } from "../../firebase/firebase"

const favorite = async (parkCode, user) =>{
 await usersCollection.doc(user[2].uid).collection("favoriteParks").doc(parkCode).set({
     parkCode: parkCode
 })
}

export default favorite;