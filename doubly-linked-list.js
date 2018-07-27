class DoublyLinkedList {
  constructor() {
    this.head = null;
  }


  insertFirst(item) {
    this.head = new _Node(item, null, this.head);
  }


  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    }
    else {
      let current = this.head,
          prev = current;

      while (current !== null) {
        prev = current;
        current = current.next;
      }
      prev.next = new _Node(item, prev, null)
    }
  }


  insertBefore(item, key) {
    if(this.head === null) {
			this.insertFirst(item);
		}

		let current = this.head,
        prev = current,
        prevPrev = prev;

		while(current !== null && current.value !== key) {
      prevPrev = prev;
			prev = current;
			current = current.next;
		}

		if (current === null) {
			throw new Error('Key not found in list');
		}

		prev.next = new _Node(item, prevPrev, current);
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

		let current = this.head,
  		  prev = current,
        prevPrev = prev,
  		  count = 0;

		while(current !== null && count !== index) {
      prevPrev = prev;
			prev = current;
			current = current.next;
			count++;
		}

		if (current === null) {
			throw new Error(`Can not insert. There are only ${count} elements in the list`);
		}

		prev.next = new _Node(item, prevPrev, current);
  }


  find(item) {
		if(this.head === null) {
			return null;
		}

		let current = this.head;
		while(current.value !== item) {
			if(current.next === null) {
				return null;
			}
			current = current.next;
		}
		return current;
	}


	remove(item) {
		if(this.head === null) {
			return null;
		}

		let current = this.head, //will be next node right after item
        prev = current, //will be targeted item
        prevPrev = prev; //will be node before targeted item

		while(current !== null && prev.value !== item) {
      prevPrev = prev;
			prev = current;
			current = current.next;
		}
		if(current === null) {
			return null;
		}

    console.log(current);
		prevPrev.next = prev.next;
    current.previous = prev.previous;
	}
}


class _Node {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}


function mainDLL() {
  let DLL = new DoublyLinkedList();

  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');

  DLL.insertFirst('Tauron');
  DLL.remove('Picon');



  console.log(display(DLL));
}

console.log(mainDLL());



////////////// DISPLAY //////////////////

function display(list) {
	let current = list.head,
			displayList = '';

	while(current !== null) {
		displayList += `${current.value} <-> `
		current = current.next;
	}

	return displayList;
}
