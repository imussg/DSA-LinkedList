class LinkedList {
	constructor() {
		this.head = null;
	}


	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}


	insertBefore(item, key) {
		if(this.head === null) {
			this.insertFirst(item)
		}

		let prev = this.head;
		let current = this.head;

		while(current !== null && current.value !== key) {
			prev = current;
			current = current.next;
		}

		if (current === null) {
			return null;
		}

		prev.next = new _Node(item, current);
	}


	insertAfter(item, key) {
		let current = this.find(key);
		let temp = current.next;
		current.next = new _Node(item, temp);
	}


	insertAt(item, index) {
		if(index === 0) {
			this.insertFirst(item);
		}

		if(this.head === null) {
			return null;
		}

		let current = this.head;
		let prev = this.head;
		let count = 0;

		while(current !== null && count !== index) {
			prev = current;
			current = current.next;
			count++;
		}

		if (current === null) {
			throw new Error(`There are only ${count} elements in the list`);
		}

		prev.next = new _Node(item, current);
	}


	insertLast(item) {
		if(this.head === null) {
			this.insertFirst(item);
		} else {
			let iterNode = this.head;
			while(iterNode.next !== null) {
				iterNode = iterNode.next;
			}
			iterNode.next = new _Node(item, null);
		}
	}


	find(item) {
		if(this.head === null) {
			return null;
		}
		let iter = this.head;
		while(iter.value !== item) {
			if(iter.next === null) {
				return null;
			}
			iter = iter.next;
		}
		return iter;
	}


	remove(item) {
		if(this.head === null) {
			return null;
		}
		let prev = this.head;
		let iter = this.head;

		while(iter !== null && iter.value !== item) {
			prev = iter;
			iter = iter.next;
		}
		if(iter === null) {
			return null;
		}
		prev.next = iter.next;
	}
}



class _Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

////////////// MAIN //////////////////

function main() {
	let SLL = new LinkedList();

	console.log(isEmpty(SLL)); //true

	SLL.insertLast('Apollo');
	SLL.insertLast('Boomer');
	SLL.insertLast('Helo');
	SLL.insertLast('Husker');
	SLL.insertLast('Starbuck');
	SLL.insertLast('Starbuck');

	SLL.insertLast('Tauhida');

	SLL.remove('squirrel');

	SLL.insertBefore('Athena', 'Boomer');
	SLL.insertAfter('Hotdog', 'Helo');
	SLL.insertAt('Kat', 3);

	SLL.remove('Tauhida');

	console.log(display(SLL));
	console.log(findSize(SLL));
	// console.log(isEmpty(SLL)); //false
	// console.log(findPrevious(SLL, 'Helo'));
	// console.log(findLast(SLL));
	console.log(reverseList(SLL));
	console.log(display(SLL));

	// console.log(thirdFromEnd(SLL));
	// console.log(findMiddle(SLL));


	let cycle = new LinkedList();





}

console.log(main());


////////////// DISPLAY //////////////////

function display(list) {
	let current = list.head,
			displayList = '';

	while(current !== null) {
		displayList += `${current.value} -> `
		current = current.next;
	}

	return displayList;
}


////////////// SIZE //////////////////

function findSize(list) {
	let current = list.head,
			size = 0;

	while (current !== null) {
		size++;
		current = current.next;
	}

	return size;
}


////////////// IS EMPTY? //////////////////

function isEmpty(list) {
	if (list.head === null) {
		return true;
	}
	return false;
}


////////////// FIND PREVIOUS //////////////////

function findPrevious(list, item) {
	let current = list.head,
			prev = list.head;

	while (current !== null && current.value !== item) {
		prev = current;
		current = current.next;
	}

	return prev;
}


////////////// FIND LAST //////////////////

function findLast(list) {
	let current = list.head;

	while (current.next !== null) {
		current = current.next;
	}

	return current;
}


////////////// MYSTERY PROGRAM //////////////////

function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// The above function traverses through a list. As
// it traverses, it sets a newNode to equal the current
// node. It then traverses through the list (excluding
// the last node) and compares if the next pointer after
// newNode is equal to the current node value. If it is,
// that means that value is a duplicate in the list so
// the newNode skips the duplicate and points to the node
// after the one it has skipped. The original traversal
// continues until the end of the list has been reached.


//NEED TO TEST!!
////////////// REVERSE LIST  //////////////////

function reverseList(list) {
	if (list.head === null) {
		return null;
	}

	if (list.head.next === null) {
		return list.head;
	}

	let prev = null,
			current = list.head,
			next = list.head.next;

	while (next !== null) {
		current.next = prev;

		prev = current;
		current = next;
		next = next.next;
	}

	current.next = prev;
	list.head = current;

	return list;


	// let current = list.head,
	// 		prev = current,
	// 		prevPrev = prev;
	//
	// while (current !== null) {
	// 	if(current === list.head) {
	// 		prev.next === null;
	// 	} else {
	// 		prev.next = prevPrev;
	// 	}
	// 	prevPrev = prev;
	// 	prev = current;
	// 	current = current.next;
	// }
	// return prev;

}



////////////// THIRD FROM THE END  //////////////////

function thirdFromEnd(list) {
	if(list.head === null || list.head.next === null || list.head.next.next === null) {
		return null;
	}

	let current = list.head;

	while (current.next.next.next !== null) {
		current = current.next;
	}
	return current;
}


////////////// FIND MIDDLE OF LIST  //////////////////

function findMiddle(list) {
	if (list.head === null) {
		return null;
	}

	let current = list.head,
			prev = current,
			prevPrev = prev;

	while(current !== null && current.next !== null) {
		prevPrev = prev;
		prev = prev.next;
		current = current.next.next;
	}

	//if list size is even, return previous value
	if(current === null) {
		return prevPrev;
	}

	//if list size is odd, return just previous value
	//current.next !== null, check in while loop is necessary for this to work
	return prev;
}


// NEED TO TEST!!!
////////////// CYCLE IN A LIST  //////////////////

function cycleInList(list) {
	let current = list.head,
			prev = current;

	while (current !== null) {
		if(current.next === prev) {
			return true;
		}
		prev = current;
		current = current.next;
	}

	return false;
}
