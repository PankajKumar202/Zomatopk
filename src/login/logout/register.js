import React,{Component} from 'react';
import Header from '../../component/Header';
const url = "https://zomatopkloginauth.herokuapp.com/api/auth/register"
class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            phone:"",
            email:"",
            password:""
            
        }
    }
    handelChange=(event)=>{
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
        .then(this.props.history.push('/'));
    }

    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <br/>
                    <div className="card ">
                        <div className="card-heading " style={{height:'50px',fontSize:'20px',backgroundColor:'green',color:'white'}}>
                            Register Form
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="name">Name</label>
                                        <input className="form-control" id="name" name="name" type="text" onChange={this.handelChange}  required/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="phone">Phone</label>
                                        <input className="form-control" id="phone" name="phone" type="number" onChange={this.handelChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="email">Email</label>
                                        <input className="form-control" id="email" type="email"
                                        name="email" onChange={this.handelChange}/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label form="form-control" for="password">Password</label>
                                        <input class="form-control" id="password" type="password"
                                        name="password" onChange={this.handelChange}/>
                                    </div>
                                </div>
                            </div>
                            <center><button className="btn btn-success" style={{marginTop:'2%'}} onClick={this.handleSubmit}>Register</button></center>
                        </div>
                    </div>  
                </div>
            </>
        )
    }

}

export default Register