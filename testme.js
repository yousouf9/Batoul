 function callMe(edges, nodeA, nodeB ){
   const graph = buildGraph(edges);

   return hasPath(graph, nodeA, nodeB, new Set())
 }

  const hasPath = (graph, nodeA, nodeB, visited) =>{  
      
    if(visited.has(nodeA)) return false;

    if(nodeA === nodeB) return true

    visited.add(nodeA);
    
    for(let neigbor of graph[nodeA]){

        if(hasPath(graph, neigbor, nodeB, visited) ===true){
            return true;
        }
    }
     return false;  
  }

 const buildGraph = (edges) =>{

    const graph = {};

    for (let egde of edges) {
        const [a, b] =  egde;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph;
 }

 const edges = [
     ["i", "j"],
     ["k", "i"],
     ["m", "k"],
     ["k", "l"],
     ["o", "n"],
 ]
console.log(callMe(edges, "i", "l"));