import {items,ticketDetails} from "./../../Stitch/mongodb";
import {
   loginUser,
   registerUser,
   hasLoggedInUser,
   logoutCurrentUser,
   getCurrentUser
} from "./../../Stitch/authentication";


const myState = {
    check: hasLoggedInUser(),
    currentuser: getCurrentUser(),
    dealer: false,
    customer: false,
}

export const userReducer =  (state = myState, action) => {
    switch (action.type) {

        case 'REGISTER_USER':
            state.dealer = action.dealer;
            state.customer = action.customer;

            registerUser(action.email, action.password);  
            return state;
        
        case 'LOGIN_USER':
            myState.check = action.isLogIn;        
            loginUser(action.email,action.password);          
            return state;

        case 'UPDATE_PROFILE':
            //quering the user whose profile is to be updated.
            const query = { "owner_id": myState.currentuser.id };
            //upsert when true add a new doc if the above query runs false
            const options = {"upsert": true};
            //the data to be updated or added
            const new_user = {
                "owner_id": myState.currentuser.id,
                "name": action.user_name,
                "email": action.user_email,
                "age": action.user_age,
                "bio": action.user_bio,
                "isAdmin": action.user_admin,
                "isDealer": action.user_dealer,
                "isCustomer": action.user_customer
            }
            // if(action.user_dealer){
            //     dealerDetails.updateOne(query, new_user, options).then(() => alert("User Profile Updated"));
            // }
            // else{
            //     customerDetails.updateOne(query, new_user, options).then(() => alert("User Profile Updated"));
            // }
            items.updateOne(query, new_user, options).then(() => alert("User Profile Updated"));
            //items.insertOne(new_user).then(() => alert("User Profile Updated"));
            return myState;

        case 'LOGOUT_USER':
            //updating the state
            state.check = false;
            state.dealer = false;
            state.customer = false;
            logoutCurrentUser();
            return state;

        case 'RAISE_TICKET':
            const new_ticket = {
                "Customer_name": action.user_cus_name,
                "customer_id": action.user_cus_id,
                "start": action.user_start,
                "destiny": action.user_destiny,
                "startdate": action.user_startdate,
                "returndate": action.user_returndate,
                "quantity": action.user_quantity
            }
            //alert("HEllo");
            ticketDetails.insertOne(new_ticket).then(() => window.location.href = '/buy_tickets');
            
            return myState;

        default:
            //returning previous state
            return myState;
    }   
}