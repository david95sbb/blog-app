import React from 'react';
import { connect } from 'react-redux';

const Home = ( props ) => {
    const _posts = props.allPost.map( ( obj ) => {
        return(
            <h4 key={ obj.id }> { obj.title } </h4>
        )
    } );
    return (
            <div>
                <h2>Home</h2>
                { _posts }
            </div>
    );
};

const _mapStateToProps = ( state ) => {
    return {
        allPost: state.allPost
    };
};

const _mapDispatchToProps = ( dispatch ) => {
    return {
        dispatch1: () => {
            //dispatch(  )
        }
    };
};

export default connect( _mapStateToProps, _mapDispatchToProps )( Home );