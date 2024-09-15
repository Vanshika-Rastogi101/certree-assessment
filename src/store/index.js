import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    modules:{
        users:{
            namespaced: true,
            state:{
                userDetails: {},
                userPosts: [],
                loading:false,
                users:{}
            },

            mutations:{
                USER_DATA(state,details){
                    state.userDetails = details;
                    state.users = details
                },

                USER_POSTS(state,posts){
                    state.userPosts = posts;
                },
                SET_LOADING(state,isLoading){
                    state.loading = isLoading;
                },
                SET_USERS(state,users){
                    state.users = users
                }
            },

            actions:{
                async fetchUserData({ commit }){
                    commit('SET_LOADING', true);
                    try{
                        const userDetails = await axios.get('https://jsonplaceholder.typicode.com/users');
                        commit('USER_DATA',userDetails.data);
                        
                    }
                    catch(error){
                        console.log("error",error)
                    }
                    finally{
                        commit('SET_LOADING', false);
                    }
                },

                async fetchUserDataById({ commit }){
                    commit('SET_LOADING', true);
                    try{
                        const userPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
                        
                        commit('USER_POSTS',userPosts.data);
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
                loading: (state) => state.loading,
                users: (state) => state.users
            }
        }
    }
})