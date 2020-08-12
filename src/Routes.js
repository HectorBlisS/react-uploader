import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ListView from './components/products/ListView'
import DetailView from './components/products/DetailView'


export default function Routes(){
    return (
        <Switch>
            <Route exact path="/products" component={ListView} />
            <Route path="/products/:productId" component={DetailView}  />
        </Switch>
    )
}