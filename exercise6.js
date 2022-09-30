//I decided to construct a Binary Tree
//with the two options: add nodes and search for nodes.

class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Methods {
    constructor(){}
    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node;
            }
            else {
                this.insertNode(root.left,node)
            }
        }
        else {
            if(root.right === null){
                root.right = node;
            }
            else {
                this.insertNode(root.right,node)
            }
        }
    }
}

const methods = new Methods

class BinaryTree {
    constructor (){
        this.root = null;
    }

    addNode(value){
        const node = new Node (value);
        if (this.root === null){ //Here I make sure that the root is empty
            this.root = node;
        } 
        else{
            methods.insertNode(this.root,node);
        }
    }

    searchNode(root,node){
        if(root == null){
            return false;
        }
        else {
            if(root.value === node){
                return true;
            }
            else if (node < root.value) {
                return this.searchNode(root.left,node);
            }
            else{
                return this.searchNode(root.right,node);
            }
        }
    }
}

const binaryTree = new BinaryTree();

//Here I will add some nodes to the tree
binaryTree.addNode(10);
binaryTree.addNode(5);
binaryTree.addNode(15);

//I will display the structure of the tree
console.log(binaryTree);


//Here I will search for a specific node. 
console.log(binaryTree.searchNode(binaryTree.root,25))
console.log(binaryTree.searchNode(binaryTree.root,15))
