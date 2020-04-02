class _Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertBefore(item, previousItem) {
        if(this.head === null) {
            this.insertFirst(item)
            return
        }

        let currNode = this.head
        let prevNode = this.head

        while(currNode.value !== previousItem) {
            if(currNode.next === null) {
                return null
            } else {
                prevNode = currNode
                currNode = currNode.next
            }
        }

        prevNode.next = new _Node(item, currNode)
    }

    insertAfter(item, afterNode) {
        if(this.head === null) {
            this.insertFirst(item)
            return
        }

        let currNode = this.head
        let prevNode = this.head

        while(currNode.value !== afterNode) {
            if(currNode.next === null) {
                return null
            } else {
                prevNode = currNode
                currNode = currNode.next
            }
        }
        let after = currNode.next

        currNode.next = new _Node(item, after)
    }

    insertAt(item, position) {
        if(position === null || position < 0) {
            this.insertFirst(item)
        }

        let currNode = this.head
        let prevNode = this.head
        let count = 0

        while(currNode.next !== null) {
            prevNode = currNode
            currNode = currNode.next
            count++

            if(count === position) {
                prevNode.next = new _Node(item, currNode)
                return
            }
        }
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head

        if(!this.head) {
            return null
        }

        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }

        return currNode
    }

    remove(item) {
        if(!this.head) {
            return null
        }

        if(this.head.value === item) {
            this.head = this.head.next
            return
        }

        let currNode = this.head
        let previousNode = this.head


        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }

        if(currNode === null) {
            console.log('item not found')
            return
        }

        previousNode.next = currNode.next
    }
}

const linkedListHelpers = {
    display(linkedList) {
        let currNode = linkedList.head

        while(currNode !== null) {
            // if(currNode.next === null) {
            //     return
            // }
            console.log(currNode.value)
            currNode = currNode.next
        }
    },
    size(linkedList) {
        let currNode = linkedList.head

        if(currNode === null) {
            return `linked list is empty`
        }

        let count = 0
        while(currNode !== null) {
            currNode = currNode.next
            count++
        }

        return count
    },
    isEmpty(linkedList) {
        let currNode = linkedList.head

        if(currNode === null) {
            return `linked list is empty`
        } else {
            return `Linked list is not empty`
        }
    },
    findPrevious(linkedList, item) {
        let currNode = linkedList.head
        let prevNode = currNode

        while(currNode.value !== item) {
            prevNode = currNode
            currNode = currNode.next
        }

        return prevNode
    },
    findLast(linkedList) {
        let currNode = linkedList.head

        while(currNode !== null) {
            currNode = currNode.next
            if(currNode.next === null) {
                return currNode
            }
        }
    },
    // reverseList(linkedList) {
    //     let currNode = linkedList.head
    //     let prevNode = currNode
    //     let firstNode have a next value of null
    //     have the last node have a next value of th next node

    //     while(currNode !== null) {
    //         prevNode = currNode
    //         currNode = currNode.next
    //     }

    // }
    thirdFromTheEnd(linkedList) {
        let currNode = linkedList.head

        let count = 0
        while(currNode.next !== null) {
            prevNode = currNode
            currNode = currNode.next
            count++

            if(count === linkedListHelpers.size(linkedList) - 3) {
                // prevNode.next = new _Node(item, currNode)
                return prevNode
            }
        }
    },
}



function main() {
    let sll = new LinkedList()

    sll.insertFirst('Apollo')
    sll.insertFirst('Boomer')
    sll.insertFirst('helo')
    sll.insertFirst('husker')
    sll.insertFirst('starbuck')
    sll.insertFirst('string')
    sll.insertFirst('string2')
    sll.insertFirst('string3')
    sll.insertLast('tauhida')
    // sll.insertAt('kat', 3)

    // linkedListHelpers.display(sll)
    // console.log(linkedListHelpers.size(sll))
    // console.log(linkedListHelpers.isEmpty(sll))
    // console.log(linkedListHelpers.findPrevious(sll, 'tauhida'))
    // console.log(linkedListHelpers.findLast(sll))
    console.log(linkedListHelpers.thirdFromTheEnd(sll))
    linkedListHelpers.display(sll)
}

main()


// drill 4
// time complexity O(n^2)

//if the next nodes value is equal to the current nodes value
// the next node next value is going to equal next next
// checks for duplicates and skips over them, else if not duplicate
// keep looping