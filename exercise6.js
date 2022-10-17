class Tree {
    //Every children of each node will be an object 
    //This object must remains the order insertion.
    children = new Map(); 
    parent = null;
    //Wee need an identifier associated to each node and helps to the map
    id = Math.floor(Math.random()*1000000);
    name;

    constructor(name){
        this.name = name;
    }

    set name(newName){
        this.name = newName;
    }

    get identifier(){
        return this.id
    }

    get children(){
        return this.children
    }

    get parentNode(){
        return this.parent
    }

    set parentNode(newParent){
        this.parent = newParent;
    }

    //method to create childrens structure
    createChildNode(name){
        const newNode = new Tree(name);
        this.children.set(newNode.identifier, newNode);
        newNode.parentNode = this  

        return newNode;
    }
}

const treeABC = new Tree('abc');

const aNode = treeABC.createChildNode('a');
const bNode = treeABC.createChildNode('b');
const cNode = treeABC.createChildNode('c');

const aaNode = aNode.createChildNode('aa');

const ccNode = cNode.createChildNode('cc');

const cccNode = ccNode.createChildNode('ccc');
const cabNode = ccNode.createChildNode('cab');
const cbaNode = ccNode.createChildNode('cba');

function displayTree(tree){
    let treeDisplay = tree;
    function getString (node,spaceCount=0){
        let str = "\n";
        node.children.forEach((child)=>{
            //We set blank spaces to make better tree visualization of the childrens
            str = str + `${" ".repeat(spaceCount)}${child.name}${getString(child, spaceCount + 1)}`;
        })
        return str;
    }
    return `\n${treeDisplay.name}${getString(treeDisplay,2)}`;
}

let structureTree = displayTree(treeABC);

console.log(structureTree);
