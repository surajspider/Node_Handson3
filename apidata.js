const middleware = [
    {
        topic: "Middleware",
        definition: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.",
        def2: "Execute any code, Make changes to the request and the response objects, End the request-response cycle, Call the next middleware function in the stack."
    }
];

const data = [
    {
        "topic": "What is node.js?",
        "answer": "Node.js is an open Source, cross platform and javascript runtime environment built on chrome's V8 javascript engine that executes javascript code"
    },
    {
        "opensource": "The Entire code is publicly accessible. i.e., It can be used anyone in the world free of cost",
        "Cross Platform": "The node.js can run on various platforms like windows, mac, unix, linux etc., and more over the code written in one machine can be executed in another machine where javascript is installed",
        "Javascript Runtime Environment": "It's just the encironment where the application is running"
    },
    {
        "note": "Node.js is asynchronous  and single threaded in nature"
    }
];

module.exports = { middleware, data };
