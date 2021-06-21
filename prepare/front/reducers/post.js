const initialState = {
  mainPosts: [
    {
      id: 1,
      header: '이벤트 위임',
      body: 'body',
      description: 'description',
      category: 'JavaScript',
      Comments: [
        {
          User: {
            nickname: 'MoMo',
          },
          content: 'test1',
        },
        {
          noUserSignup: {
            email: 'wdudtlrw@gmail.com',
            nickname: '익명',
            password: '1234567890',
          },
          content: 'test2',
        },
      ],
    },
  ],

  postAdded: false,
};

export const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: 'this is dummyPost',
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
