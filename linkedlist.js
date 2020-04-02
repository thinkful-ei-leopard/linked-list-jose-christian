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

        if(currNode === null) {
            return `Linked list is empty!`
        }

        while(currNode !== null) {
            if(currNode.next === null) {
                return
            }
            currNode = currNode.next
            console.log(currNode.value)
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
    }
}

function main() {
    let sll = new LinkedList()

    sll.insertFirst('Apollo')
    sll.insertFirst('Boomer')
    sll.insertFirst('helo')
    sll.insertFirst('husker')
    sll.insertFirst('starbuck')
    sll.insertLast('tauhida')
    sll.insertAt('kat', 3)

    linkedListHelpers.display(sll)
    console.log(linkedListHelpers.size(sll))
    console.log(linkedListHelpers.isEmpty(sll))
}

main()