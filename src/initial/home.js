import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends Component{
    /**
     * Ejecuta solo una vez esta función
     */
    componentDidMount(){
        this.props.getAllPost();
    }

    /**
     * Ejecuta antes de renderizar el componente
     */
    componentWillUnmount(){
        this.props.clear();
    }

    /**
     * Renderizar los post
     */
    allPost = () => {
        const _posts = this.props.allPost.map( ( obj ) => {
            return(
                <h4 key={ obj.id }> { obj.title } </h4>
            )
        } );
        return _posts;
    };
    render(){
        return(
            <div>
                <h2>Bienvenido</h2>
                { this.allPost() }
            </div>
        );
    }
}

const _mapStateToProps = ( state ) => {
    return {
        allPost: state.allPost
    };
};

const _mapDispatchToProps = ( dispatch ) => {
    return {
        getAllPost: () => {
            axios.get( 'https://blog-api-u.herokuapp.com/v1/posts' )
                .then( function ( response ) {
                    console.log( response );
                    dispatch( {
                        type: "DATA_LOADED",
                        data: response.data
                    } );
                } )
                .catch( function ( e ) {
                    console.log( e );
                } )
        },
        clear: () => {
            dispatch( {
                type: 'CLEAR_DATA'
            } );
        }
    };
};

export default connect( _mapStateToProps, _mapDispatchToProps )( Home );