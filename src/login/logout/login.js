import React,{Component} from 'react';
import Header from '../../component/Header';
const url="https://zomatopkloginauth.herokuapp.com/api/auth/login"
class Login extends Component {
constructor(props){
    super(props)
    this.state={
        email:"",
        password:"",
        message:""
    }
}
handleChange=(event)=>{
this.setState({[event.target.name]:event.target.value})
}
handleSubmit=()=>{
    fetch(url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Inside handle Submit>>>", data)
        if(data.auth===false){
            this.setState({message:data.token})
        }else{
            sessionStorage.setItem('ltk',data.token)
            this.props.history.push('/')
        }
    })
}
    render(){
        return(
            <>
                <Header/>
                <div class="container">
                    <br/>
                    <div class="card ">
                        <div class="card-heading bg-danger" style={{height:'50px',fontSize:'20px',color:'white'}}>
                            Login Form
                        </div>
                        <div class="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="email" >Email</label>
                                    <input className="form-control" id="email" type="email"
                                            name="email" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="form-control" for="password" >Password</label>
                                    <input class="form-control" id="password" type="password"
                                            name="password" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <center><button className="btn btn-danger" style={{marginTop:'2%'} } onClick={this.handleSubmit}>Login</button></center>
                        </div>
                    </div>  
                </div>
            </>
        )
    }

}

export default Login