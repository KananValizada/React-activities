import React , {Component} from 'react'
import {connect} from 'react-redux';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import axios from '../../../axios-orders';
import * as actions from '../../../store/actions/index'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

class ContactData extends Component {
    state = {
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your name'
                },
                value:'',
                validation:{
                    required: true
                },
                valid:false,
                touched:false
            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required: true
                },
                valid:false,
                touched:false
            },
            zip:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:'',
                validation:{
                    required: true,
                    minlength:5,
                    maxLength:10
                },
                valid:false,
                touched:false
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:'',
                validation:{
                    required: true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your mail'
                },
                value:'',
                validation:{
                    required: true
                },
                valid:false,
                touched:false
            },
            deliveryMethod: {
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastest',displayValue:'Fastest'},
                        {value:'cheapest',displayValue:'Cheapest'}
                    ]
                },
                value:'fastest',
                validation:{},
                valid:true
            },
        },
        formIsValid:false,

    }


    chechValidity(value,rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minlength){
            isValid = value.length >= rules.minlength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    orderHandler = (event) =>{
        event.preventDefault()
    const formData = {}
    for(let orderDataIdentifier in this.state.orderForm){
        formData[orderDataIdentifier] = this.state.orderForm[orderDataIdentifier].value
    }
    const order = {
      ingredients: this.props.ingr,
      price: this.props.totPrc,
      orderData:formData
    }
    this.props.onOrderBurger(order)
}
    

    inputChangedHandler = (event,inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.chechValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for(let formIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[formIdentifier].valid && formIsValid;
        }
        this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid})
        console.log(updatedFormElement.valid)
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })

        }

        let form = (<form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement=>(
                <Input key={formElement.id}
                       elementType={formElement.config.elementType}
                       elementConfig={formElement.config.elementConfig}
                       value={formElement.config.value}
                       invalid ={!formElement.config.valid}
                       shouldValidate={formElement.config.validation}
                       touched = {formElement.config.touched}
                       changed={(event)=>this.inputChangedHandler(event,formElement.id)} />
            ))}
            <Button btnType = 'Success' disabled={!this.state.formIsValid} >Order</Button>
        </form>);

        if(this.props.loading){
           form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h1>Enter your contact data </h1>
                {form}
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
        ingr:state.burgerBuilder.ingredients,
        totPrc:state.burgerBuilder.totalPrice,
        loading:state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
   return{
    onOrderBurger : (orderData) => dispatch(actions.purchaseBurger(orderData))
   } 
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios))