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

    print() {
        if(this.head === null) {
            return console.log('list is empty!')
        }

        let currNode = this.head

        while(currNode.value !== null) {
            if(currNode.next === null) {
                console.log('end')
            }
            console.log(currNode.value)
            currNode = currNode.next
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
    sll.insertBefore('shoe', 'tauhida')
    sll.insertAfter('dog', 'tauhida')

    console.log(sll.find('dog'))
    sll.print()
}

main()