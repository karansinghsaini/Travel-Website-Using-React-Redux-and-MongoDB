
export function loginUserAction(email,password,isLoginIn){
    return {
      type: 'LOGIN_USER',
      email: email,
      password: password, 
      isLogIn: isLoginIn
    }
  }

  
export function logoutUserAction(){
    return {
      type: 'LOGOUT_USER'      
    }
  }

  
  export function registerUserAction(email,password,isDealer,isCustomer) {
    return{
      type: 'REGISTER_USER',
      email: email,
      password: password,
      dealer: isDealer,
      customer: isCustomer    
    }
  }

  export function updateProfile(name,email,age,bio,isAdmin,isDealer,isCustomer) {
  
    return{
      type: 'UPDATE_PROFILE',
      user_name: name,
      user_email: email,
      user_age: age,
      user_bio: bio,
      user_admin: isAdmin,
      user_dealer: isDealer,
      user_customer: isCustomer
    }
  }

  export function raiseTickets(cus_name,cus_id,start, destiny,startdate, returndate,quantity) {
  
    return{
      type: 'RAISE_TICKET',
      user_cus_name: cus_name,
      user_cus_id: cus_id,
      user_start: start,
      user_destiny: destiny,
      user_startdate: startdate,
      user_returndate: returndate,
      user_quantity: quantity
    }
  }


  export function changeState(users,tickets){
    return {
      type: 'CHANGE_STATE',
      action_users: users,
      action_tickets: tickets, 
    }

  }
 
  