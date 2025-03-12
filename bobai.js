// Create Bob AI elements
function createBobAI() {
  // Create container
  const container = document.createElement('div');
  container.id = 'bob-ai-container';
  container.style.position = 'fixed';
  container.style.top = '20px';
  container.style.left = '20px';
  container.style.width = '60px';
  container.style.height = '60px';
  container.style.backgroundColor = '#4a00e0';
  container.style.borderRadius = '50%';
  container.style.boxShadow = '0 0 20px rgba(142, 45, 226, 0.6)';
  container.style.zIndex = '9999';
  container.style.overflow = 'hidden';
  
  // Create icon
  const icon = document.createElement('div');
  icon.id = 'bob-ai-icon';
  icon.textContent = '🤖';
  icon.style.position = 'absolute';
  icon.style.top = '0';
  icon.style.left = '0';
  icon.style.width = '60px';
  icon.style.height = '60px';
  icon.style.display = 'flex';
  icon.style.justifyContent = 'center';
  icon.style.alignItems = 'center';
  icon.style.fontSize = '30px';
  icon.style.color = 'white';
  icon.style.cursor = 'pointer';
  
  // Create content
  const content = document.createElement('div');
  content.id = 'bob-ai-content';
  content.style.position = 'absolute';
  content.style.top = '0';
  content.style.left = '0';
  content.style.width = '100%';
  content.style.height = '100%';
  content.style.display = 'none';
  content.style.flexDirection = 'column';
  
  // Create header
  const header = document.createElement('div');
  header.id = 'bob-ai-header';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.padding = '15px';
  header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  
  // Create title
  const title = document.createElement('div');
  title.id = 'bob-ai-title';
  title.textContent = 'Bob AI';
  title.style.color = 'white';
  title.style.fontSize = '20px';
  title.style.fontWeight = 'bold';
  
  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.id = 'bob-ai-close';
  closeBtn.textContent = '×';
  closeBtn.style.background = 'none';
  closeBtn.style.border = 'none';
  closeBtn.style.color = 'white';
  closeBtn.style.fontSize = '20px';
  closeBtn.style.cursor = 'pointer';
  
  // Create messages container
  const messages = document.createElement('div');
  messages.id = 'bob-ai-messages';
  messages.style.flex = '1';
  messages.style.padding = '15px';
  messages.style.overflowY = 'auto';
  messages.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  
  // Create input container
  const inputContainer = document.createElement('div');
  inputContainer.id = 'bob-ai-input-container';
  inputContainer.style.padding = '15px';
  inputContainer.style.display = 'flex';
  inputContainer.style.gap = '10px';
  inputContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  
  // Create input
  const input = document.createElement('input');
  input.id = 'bob-ai-input';
  input.type = 'text';
  input.placeholder = 'Ask me anything...';
  input.style.flex = '1';
  input.style.padding = '10px';
  input.style.borderRadius = '5px';
  input.style.border = 'none';
  input.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  input.style.color = 'white';
  
  // Create send button
  const sendBtn = document.createElement('button');
  sendBtn.id = 'bob-ai-send';
  sendBtn.textContent = 'Send';
  sendBtn.style.padding = '10px 15px';
  sendBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  sendBtn.style.border = 'none';
  sendBtn.style.borderRadius = '5px';
  sendBtn.style.color = 'white';
  sendBtn.style.cursor = 'pointer';
  
  // Assemble the components
  header.appendChild(title);
  header.appendChild(closeBtn);
  
  inputContainer.appendChild(input);
  inputContainer.appendChild(sendBtn);
  
  content.appendChild(header);
  content.appendChild(messages);
  content.appendChild(inputContainer);
  
  container.appendChild(icon);
  container.appendChild(content);
  
  // Add to document
  document.body.appendChild(container);
  
  // Add event listeners
  icon.addEventListener('click', function() {
    container.style.width = '350px';
    container.style.height = '450px';
    container.style.borderRadius = '15px';
    content.style.display = 'flex';
  });
  
  closeBtn.addEventListener('click', function() {
    container.style.width = '60px';
    container.style.height = '60px';
    container.style.borderRadius = '50%';
    content.style.display = 'none';
  });
  
  function sendMessage() {
    const message = input.value.trim();
    if (message) {
      addUserMessage(message);
      input.value = '';
      
      setTimeout(function() {
        const response = getBobResponse(message);
        addBobMessage(response);
      }, 1000);
    }
  }
  
  sendBtn.addEventListener('click', sendMessage);
  
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  function addBobMessage(text) {
    const message = document.createElement('div');
    message.style.marginBottom = '10px';
    message.style.padding = '10px';
    message.style.borderRadius = '10px';
    message.style.maxWidth = '80%';
    message.style.color = 'white';
    message.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function addUserMessage(text) {
    const message = document.createElement('div');
    message.style.marginBottom = '10px';
    message.style.padding = '10px';
    message.style.borderRadius = '10px';
    message.style.maxWidth = '80%';
    message.style.color = 'white';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    message.style.marginLeft = 'auto';
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function getBobResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Enhanced knowledge base
    const knowledge = {
      science: {
        physics: "Physics is the study of matter, energy, and their interactions. Key concepts include Newton's laws of motion, Einstein's theory of relativity, quantum mechanics, and thermodynamics.",
        chemistry: "Chemistry explores the composition, structure, properties, and changes of matter. It covers atoms, molecules, reactions, and the periodic table of elements.",
        biology: "Biology studies living organisms and their interactions. Topics include cells, genetics, evolution, ecology, and physiology.",
        astronomy: "Astronomy examines celestial objects like stars, planets, galaxies, and the universe's origin and evolution."
      },
      technology: {
        ai: "Artificial Intelligence involves creating systems that can perform tasks requiring human intelligence. Machine learning, neural networks, and natural language processing are key components.",
        programming: "Programming involves writing instructions for computers using languages like JavaScript, Python, C++, and Java. Key concepts include algorithms, data structures, and software design patterns.",
        internet: "The Internet is a global network of interconnected computers using standardized communication protocols. The World Wide Web is a service built on top of this infrastructure."
      },
      math: {
        algebra: "Algebra uses symbols to represent quantities and express relationships through equations and formulas.",
        calculus: "Calculus studies rates of change and accumulation through derivatives and integrals.",
        statistics: "Statistics involves collecting, analyzing, interpreting, and presenting data to discover patterns and make predictions."
      },
      history: {
        ancient: "Ancient history (before 500 CE) includes civilizations like Mesopotamia, Egypt, Greece, Rome, China, and India.",
        medieval: "Medieval history (500-1500 CE) covers the Middle Ages, including feudalism, the Byzantine Empire, and Islamic Golden Age.",
        modern: "Modern history (1500 CE-present) includes the Renaissance, Industrial Revolution, World Wars, and Digital Age."
      },
      philosophy: {
        ethics: "Ethics examines concepts of right and wrong behavior, moral principles, and values.",
        epistemology: "Epistemology studies knowledge, belief, and justification - how we know what we know.",
        metaphysics: "Metaphysics explores the nature of reality, existence, time, space, and causality."
      }
    };

    // Advanced pattern matching
    if (/^(hi|hello|hey|greetings)/i.test(lowerMessage)) {
      return "Hello! I'm Bob AI, your advanced assistant. I can discuss science, technology, philosophy, history, and more. How can I help you today?";
    }
    
    // Math calculations
    const mathMatch = message.match(/calculate\s+([\d\+\-\*\/\(\)\.\s]+)/i);
    if (mathMatch || /what is \d+\s*[\+\-\*\/]\s*\d+/i.test(lowerMessage)) {
      try {
        let expression = mathMatch ? mathMatch[1] : lowerMessage.replace(/what is /i, '');
        const result = eval(expression.replace(/[^0-9+\-*/().]/g, ''));
        return `The result of ${expression} is ${result}.`;
      } catch (e) {
        return "I couldn't calculate that. Please check the format and try again.";
      }
    }
    
    // Knowledge base queries
    for (const category in knowledge) {
      for (const topic in knowledge[category]) {
        if (lowerMessage.includes(topic)) {
          return knowledge[category][topic];
        }
      }
    }
    
    // Website-specific information
    if (/doom bird|doombird|bird game/i.test(lowerMessage)) {
      return "Doom Bird is an epic game where you navigate through fiery obstacles. It features multiple difficulty levels, high score tracking, and intense gameplay. Try it by clicking the flaming button!";
    }
    
    if (/website|site|page|nash/i.test(lowerMessage)) {
      return "This is Nash's Epic Gaming Realm, a collection of browser-based games. Currently featuring Doom Bird, with more games planned for the future. All games are playable directly in your browser with no downloads required.";
    }
    
    // Philosophical questions
    if (/meaning of life|purpose of life|why are we here/i.test(lowerMessage)) {
      return "The meaning of life is a profound philosophical question. Different perspectives include: finding personal fulfillment, contributing to others' wellbeing, spiritual connection, or creating your own meaning. What meaning resonates most with you?";
    }
    
    // Current date and time
    if (/time|date|day|today/i.test(lowerMessage)) {
      const now = new Date();
      return `The current date and time is ${now.toLocaleString()}.`;
    }
    
    // Advanced reasoning
    if (/why|how|what|when|where|who/i.test(lowerMessage)) {
      // Extract the question topic
      const questionWords = ["why", "how", "what", "when", "where", "who"];
      let topic = "";
      
      for (const word of questionWords) {
        if (lowerMessage.includes(word + " is") || lowerMessage.includes(word + " are")) {
          const regex = new RegExp(word + "\\s+(?:is|are)\\s+(.+)", "i");
          const match = lowerMessage.match(regex);
          if (match) {
            topic = match[1];
            break;
          }
        }
      }
      
      if (topic) {
        return `Regarding "${topic}": This appears to be a specific question that would benefit from a comprehensive answer. While I have knowledge in many areas, I'd need to research this specific topic to give you the most accurate information. Is there a particular aspect of this topic you're interested in?`;
      }
    }
    
    // Emotional intelligence
    if (/sad|depressed|unhappy|angry|upset/i.test(lowerMessage)) {
      return "I'm sorry to hear you're feeling that way. While I'm just an AI, I understand emotions can be challenging. Consider talking to someone you trust, engaging in activities you enjoy, or seeking professional support if needed.";
    }
    
    if (/happy|excited|great|good news/i.test(lowerMessage)) {
      return "That's wonderful to hear! Positive emotions are worth celebrating. Is there something specific that's making you feel this way?";
    }
    
    // Jokes
    if (/joke|funny|make me laugh/i.test(lowerMessage)) {
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the JavaScript developer wear glasses? Because he couldn't C#!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Why do programmers always mix up Halloween and Christmas? Because Oct 31 = Dec 25!",
        "Why did the function go to therapy? It had too many complex issues to resolve on its own!"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    // Default intelligent responses
    const responses = [
      "That's an intriguing question. To provide the most helpful response, could you elaborate on what specific aspect you're interested in?",
      "I'm analyzing your query. To better assist you, could you provide more context or details about what you're looking to understand?",
      "I'd be happy to explore this topic with you. To ensure my response addresses your needs, could you clarify what particular information you're seeking?",
      "This is an interesting area to discuss. To tailor my response to your interests, could you specify which aspects you'd like me to focus on?",
      "I'm here to provide thoughtful insights on this topic. To make my response most relevant, could you share what perspective or information would be most helpful?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Add welcome message
  setTimeout(function() {
    addBobMessage("Hi there! I'm Bob AI. How can I help you today?");
  }, 500);
}

// Initialize Bob AI when the page loads
window.addEventListener('DOMContentLoaded', createBobAI); 