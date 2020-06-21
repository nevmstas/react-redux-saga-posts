import React from 'react'
import { connect } from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Warning} from './Warning'
 
class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if(!title.trim()){
            return this.props.showAlert('Post cannot be empty!')
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    //Универсальный обработчик для всех input
    changeInputHandler = event =>{      
        event.persist() //позволит коду удерживать ссылки на это событие
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Warning text = {this.props.alert}/>}
                <div className="form-group">
                    <label htmlFor="title">Post title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}/>
                </div>
                <button className='btn btn-success' type='submit'>Create</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    alert: state.app.alert
})
export default connect(mapStateToProps, {
    createPost,
    showAlert,

})(PostForm)