
const sortList = (list) => {
    return list.sort((item1, item2) => {
        if (item1.done === item2.done) {
            return 0;
        }
        return item1.done ? 1 : -1;
    })
}

export default sortList