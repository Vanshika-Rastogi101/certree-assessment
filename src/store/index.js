import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    modules:{
        users:{
            namespaced: true,
            state:{
                userDetails: {},
                userPosts: [],
                loading:false
            },

            mutations:{
                USER_DATA(state,details){
                    state.userDetails = details;
                },

                USER_POSTS(state,posts){
                    state.userPosts = posts;
                },
                SET_LOADING(state,isLoading){
                    state.loading = isLoading;
                }
            },

            actions:{
                async fetchUserData({ commit }, userId){
                    commit('SET_LOADING', true);
                    try{
                        const userDetails = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                        const userPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                        commit('USER_DATA',userDetails.data);
                        commit('USER_POSTS',userPosts);
                    }
                    catch(error){
                        console.log("error",error)
                    }
                    finally{
                        commit('SET_LOADING', false);
                    }
                }
            },

            getters:{
                userDetails: (state) => state.userDetails,
                userPosts: (state) => state.userPosts,
                loading: (state) => state.loading
            }
        }
    }
})