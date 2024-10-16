/*
* The function takes in a list as a parameter and returns a sorted version depending on whether the elements are done or not done
*/

const sortList = (list) => {
    return list.sort((item1, item2) => {
        if (item1.done === item2.done) {
            return 0;
        }
        return item1.done ? 1 : -1;
    })
}

export default sortList