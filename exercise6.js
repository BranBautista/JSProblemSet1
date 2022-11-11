class Tree{
    children = new Array();
    parent = null;
    name;

    constructor(name){
        this.name = name
    }

    set parentNode(newParent){
        this.parent = newParent;
    }

    //method to create childrens structure
    createChildNode(name){
        const newNode = new Tree(name);
        this.children.push(newNode)
        newNode.parentNode = this.name  

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

const ccccNode = cccNode.createChildNode('cccc');

//Here we can console.log the tree structure but it will not be visualized well
console.log(treeABC);

//In order to visualize the tree in a better way we can define the next function

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