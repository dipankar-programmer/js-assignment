class User {
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.LUcoin = 0;
        this.courses=[];
        
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;

    }
    

}
class Moderator extends User{
    addCoins(){
        User.LUcoin++;
        console.log(`${this.name} has ${this.LUcoin} coins`)
        return this;

    }
    removeCoins(){
        User.LUcoin--;
        console.log(`${this.name} has ${this.LUcoin} coins`)
        return this;

    }



}
class Admin extends Moderator{
    addCourse(user,course){
        User.courses.push(course)
        console.log(user)
        }
    removeCourse(){
        User.courses.pop(course)
        console.log(user)

    }



}


let user1 = new User('dilip',25,'dipp@hgmail.com')
let user2 = new User('dil',22,'dil@hgmail.com')
let mod = new Moderator('berlin',24,'b@gmail.com')
let admin = new Admin('prasad',24,'p@gmail.com')


let users=[user1,user2,mod,admin]
users.forEach(()=>{
    console.log(users)
})

Moderator.addCoins()
Moderator.addCoins()
Moderator.removeCoins()

Admin.addCourse(user1,"javascript")
Admin.addCourse(user2,"AI-ML")


users.forEach(()=>{
    console.log(users)
})