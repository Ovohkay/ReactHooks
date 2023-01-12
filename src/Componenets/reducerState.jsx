export const reducerState = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            if(state.count >= 20){
                return{
                    count: state.count,
                    show: !show.count
                }
            }
            return{
                count: state.count +1,
                show: !state.show
            }

            case "DECREMENT":
                if (state.count <=0) {
                    return{ count:state.count}
                }
                return{
                    count: state.count - 1
                }



                default:
                    break;
    } }
