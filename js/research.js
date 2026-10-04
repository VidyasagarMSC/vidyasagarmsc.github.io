// ============================================
// RESEARCH DATA
// ============================================
const researchData = {
  articles: [
    { id: 1000, title: "A Field Guide to AI Agent Frameworks", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-09-10", topics: ["AI", "Open Source"], url: "https://dzone.com/articles/ai-agent-frameworks", views: "3.7K", summary: "This piece covers the managed AI teammate apps, the open-source runtimes you host yourself, and the developer frameworks you write code." },
    { id: 1001, title: "How AI Is Actually Changing SRE Tools, Part 2: ITOps, Chaos Engineering, and the Rest of the Job", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-08-20", topics: ["AI", "Observability"], url: "https://dzone.com/articles/ai-sre-itops-chaos", views: "2.3K", summary: "Across every category, AI is good at surfacing options and drafts; the SRE still owns the judgment call with real consequences." },
    { id: 1002, title: "Graph Engineering: The Layer After Loop Engineering", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-08-14", topics: ["AI"], url: "https://dzone.com/articles/understanding-graph-engineering", views: "2.6K", summary: "A single agent is just the smallest possible graph: one node with an edge back to itself. Most tasks should stay that simple." },
    { id: 1003, title: "Incident Management and the Rise of AI SRE Agents", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-08-11", topics: ["AI", "Observability"], url: "https://dzone.com/articles/ai-sre-agents", views: "2.6K", summary: "A newer category, dedicated AI SRE agents, goes further: they actively query logs, metrics, and deploy history live during an incident." },
    { id: 1004, title: "Loop Engineering: The Layer After Prompt, Context, and Harness Engineering", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-07-01", topics: ["AI", "Architecture"], url: "https://dzone.com/articles/loop-engineering-llms", views: "2.9K", summary: "This article walks through all four layers side by side, with comparison tables for when to use each one and which agent architecture fits which job." },
    { id: 1005, title: "Code Review Core Practices", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-06-29", topics: ["DevOps", "Architecture", "Security"], url: "https://dzone.com/refcardz/code-review-patterns-and-anti-patterns", summary: "Refcard #291 — Practical guidance for human, automated, and AI-assisted code review workflows. Covers how each layer contributes and where the handoffs go wrong." },
    { id: 1006, title: "No VIP? No Problem: Pacemaker-Based SAP HANA High Availability Using a Load Balancer Health Check", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-06-25", topics: ["Cloud"], url: "https://dzone.com/articles/sap-hana-ha-pacemaker", views: "1.8K", summary: "Many cloud platforms do not support floating virtual IPs, which breaks the standard RHEL Pacemaker setup for SAP HANA HA. Use a network load balancer." },
    { id: 1007, title: "From MkDocs 1.6 to Zensical — Here’s Why I Finally Made the Move", platform: "Medium", platforms: ["Medium"], year: 2026, date: "2026-05-08", topics: ["Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/from-mkdocs-1-6-to-zensical-heres-why-i-finally-made-the-move-53b273b49cdd", readingTime: "6 min", summary: "I want to tell you about a warning message that showed up in my terminal one afternoon and completely changed how I think about my…" },
    { id: 1008, title: "From Prompts to Harnesses: How AI Engineering Has Grown Up", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2026, date: "2026-05-05", topics: ["AI"], url: "https://hackernoon.com/from-prompts-to-harnesses-how-ai-engineering-has-grown-up", readingTime: "16 min", summary: "Prompt engineering got us started. Context engineering made things consistent. Harness engineering is what makes AI agents reliable in production. Here is…" },
    { id: 1009, title: "How I Fixed Windows Installation - BitLocker, a Write-Protected USB, and the IRST Rabbit Hole", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2026, date: "2026-04-29", topics: ["Developer Advocacy"], url: "https://hackernoon.com/how-i-fixed-windows-installation-bitlocker-a-write-protected-usb-and-the-irst-rabbit-hole", readingTime: "8 min", summary: "A friend's HP laptop was stuck behind BitLocker with no recovery key. Here's how I fixed the write-protected USB, missing SSD, and the 15% install freeze." },
    { id: 1010, title: "Open-Source LLM Tools Worth Your Time", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-04-28", topics: ["AI", "Open Source"], url: "https://dzone.com/articles/open-source-llm-tools-worth-your-time", views: "4.6K", summary: "Building with LLMs in 2026 means more than picking a model and calling an API. This article covers the full open-source stack by defining tools and their…" },
    { id: 1011, title: "MCP vs Skills vs Agents With Scripts: Which One Should You Pick?", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-03-26", topics: ["AI"], url: "https://dzone.com/articles/mcp-vs-skills-vs-agents", views: "5.5K", summary: "Learn about when to use MCP, skills, and agents with scripts. How are they different from each other and what are they actually meant to be used for." },
    { id: 1012, title: "The Ultimate Terminal Stack in 2026: A Cross-Platform Guide for macOS, Linux, and Windows", platform: "Medium", platforms: ["Medium"], year: 2026, date: "2026-03-06", topics: ["Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/the-ultimate-terminal-stack-in-2026-a-cross-platform-guide-for-macos-linux-and-windows-c0d1f93cd9cc", readingTime: "10 min", summary: "With the release of Macbook Neo, I thought this would be a perfect time to talk about my new terminal setup on macOS and how similar setup…" },
    { id: 1013, title: "Trust No Agent: How to Secure Autonomous Tools on Your Machine", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-02-17", topics: ["AI"], url: "https://dzone.com/articles/trust-no-agent-securing-autonomous-ai-tools", views: "4.3K", summary: "Most developers run autonomous agents with zero isolation. This guide teaches you how to build defense in depth to contain the blast radius." },
    { id: 1014, title: "ToolOrchestra vs Mixture of Experts: Routing Intelligence at Scale", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-01-30", topics: ["Architecture"], url: "https://dzone.com/articles/toolorchestra-vs-mixture-of-experts-routing-intelligence", views: "2.4K", summary: "Learn about two fundamental architectural patterns reshaping how we build intelligent systems. Explore ToolOrchestra, Mixture of Experts (MoE), and other…" },
    { id: 1015, title: "Database Evolution: From Traditional RDBMS to AI-Native and Quantum-Ready Systems", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2026, date: "2026-01-11", topics: ["Quantum", "AI", "Data Science"], url: "https://hackernoon.com/database-evolution-from-traditional-rdbms-to-ai-native-and-quantum-ready-systems", readingTime: "10 min", summary: "In this article, you will learn about the evolution of modern databases, how they're adapting to AI workloads, what quantum computing means for data…" },
    { id: 1016, title: "Developer Tools That Actually Matter in 2026", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026-01-06", topics: ["Developer Advocacy"], url: "https://dzone.com/articles/developer-tools-that-actually-matter-in-2026", views: "9.4K", summary: "The developer tools making real differences today are the ones solving the actual problems we face as developers every day." },
    { id: 1017, title: "Shipping Production-Grade AI Agents", platform: "DZone", platforms: ["DZone"], year: 2026, date: "2026", topics: ["AI", "DevOps", "Security"], url: "https://dzone.com/refcardz/shipping-production-grade-ai-agents", summary: "Refcard #403 — Practical guidance for shipping reliable AI agents with guardrails, eval gates, secure config, deployment workflows, monitoring, and cost controls." },
    { id: 1018, title: "Quantum Security Governance: Building a Framework for the Post-Quantum World", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2025, date: "2025-12-18", topics: ["Quantum", "Security"], url: "https://hackernoon.com/quantum-security-governance-building-a-framework-for-the-post-quantum-world", readingTime: "8 min", summary: "The convergence of quantum computing advancements and evolving cybersecurity regulations is reshaping how organizations approach security governance." },
    { id: 1019, title: "Infrastructure as Code: How Automation Evolved to Power AI Workloads", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-12-18", topics: ["AI", "DevOps"], url: "https://dzone.com/articles/infrastructure-as-code-automation-ai-workloads", views: "2.3K", summary: "Learn about how Infrastructure as Code progressed in 2025 and how it helped automation, particularly for provisioning AI infrastructure." },
    { id: 1020, title: "Architectural Understanding of CPUs, GPUs, and TPUs", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-12-04", topics: ["Architecture"], url: "https://dzone.com/articles/understanding-cpus-gpus-and-tpus", views: "7.5K", summary: "Learn about CPUs, GPUs, and TPUs — definitions, use cases, architectural differences, and above all, when to use CPUs, GPUs, and TPUs." },
    { id: 1021, title: "Reflecting on My 2025 Journey: A Year of Innovation, Learning, and Technical Excellence", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2025, date: "2025-11-19", topics: ["Cloud", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2025/11/19/reflecting-on-my-2025-journey-a-year-of-innovation-learning-and-technical-excellence/", summary: "December 2025 As I reflect on 2025, I'm filled with immense gratitude and excitement for what has been one of the most productive years in my technical…" },
    { id: 1022, title: "Understanding Quantum Optimization: A Beginner's Guide", platform: "Substack", platforms: ["Substack"], year: 2025, date: "2025-11-15", topics: ["Quantum", "Mathematics"], url: "https://vmacwrites.substack.com/p/understanding-quantum-optimization", summary: "How Quantum Computers Might Solve the World's Hardest Problems A simplified introduction to quantum optimization, QUBO formulations, and the mathematics…" },
    { id: 1023, title: "Formae and PKL: Revolutionizing Infrastructure Automation", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-11-11", topics: ["DevOps", "Open Source"], url: "https://dzone.com/articles/formae-pkl-infrastructure-automation", views: "2.2K", summary: "Learn about Formae, an open-source IaC platform introducing a stateless, auto-discovering approach to infrastructure management and PKL, a…" },
    { id: 1024, title: "Finding Today's Changed Files: A Quick Python Script for File Uploads", platform: "Dev.to", platforms: ["Dev.to"], year: 2025, date: "2025-11-03", topics: ["Developer Advocacy", "Python"], url: "https://dev.to/vidyasagarmsc/finding-todays-changed-files-a-quick-python-script-for-file-uploads-13b7", readingTime: "3 min", summary: "My friend recently asked me for help with a common problem: they needed to upload files to a remote..." },
    { id: 1025, title: "Beyond Data: The Rising Need for AI Security", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2025, date: "2025-11-03", topics: ["AI", "Security"], url: "https://hackernoon.com/beyond-data-the-rising-need-for-ai-security", readingTime: "13 min", summary: "As organizations increasingly deploy AI systems for decision-making, ensuring both data and AI pipeline security becomes critical to safeguard integrity…" },
    { id: 1026, title: "HSTS Beyond the Basics: Securing AI Infrastructure and Modern Attack Vectors", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-10-29", topics: ["AI", "Security"], url: "https://dzone.com/articles/understanding-hsts-protocol", views: "2.4K", summary: "HTTP Strict Transport Security (HSTS) is a web security policy mechanism that helps protect websites against protocol downgrade attacks and cookie…" },
    { id: 1027, title: "AI Infrastructure: Compute, Storage, Observability, Security, and More", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-10-13", topics: ["AI", "Security", "Observability"], url: "https://dzone.com/articles/ai-infrastructure-compute-storage-observability", views: "2.7K", summary: "In this final article, you will learn about AI infrastructure compute, storage, observability, optimization, security, and deployment architecture." },
    { id: 1028, title: "Understanding HSTS: The Backbone of Modern Web Security", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2025, date: "2025-10-05", topics: ["Security"], url: "https://hackernoon.com/understanding-hsts-the-backbone-of-modern-web-security", readingTime: "10 min", summary: "HTTP Strict Transport Security (HSTS) is a web security policy mechanism that helps protect websites against protocol downgrade attacks and cookie…" },
    { id: 1029, title: "AI Infrastructure Guide: Tools, Frameworks, and Architecture Flows", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-10-02", topics: ["AI", "Security", "Observability"], url: "https://dzone.com/articles/ai-infrastructure-guide-tools-frameworks-and-archi", views: "4.5K", summary: "This guide covers AI infrastructure, from hardware acceleration and model serving to monitoring and security, with tools, patterns, and strategies proven…" },
    { id: 1030, title: "AI Infrastructure for Agents and LLMs: Options, Tools, and Optimization", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-09-22", topics: ["AI", "Mathematics"], url: "https://dzone.com/articles/ai-infrastructure-agents-llms-tools-optimization", views: "5.4K", summary: "This article explores the diverse infrastructure options and tools that are available for deploying and optimizing AI agents and large language models…" },
    { id: 1031, title: "Cloud Automation Excellence: Terraform, Ansible, and Nomad for Enterprise Architecture", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-09-09", topics: ["DevOps", "Architecture", "Cloud"], url: "https://dzone.com/articles/cloud-automation-excellence-terraform-ansible-amp", views: "6.0K", summary: "Enterprise cloud architecture demands sophisticated orchestration of infrastructure, configuration, and workload management across diverse computing…" },
    { id: 1032, title: "Pulumi: Modern Infrastructure as Code With Real Programming Languages", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-08-26", topics: ["DevOps", "Cloud"], url: "https://dzone.com/articles/pulumi-infrastructure-as-code", views: "4.0K", summary: "Pulumi is an Infrastructure as Code platform that lets developers and teams create, deploy, and manage cloud resources using familiar programming…" },
    { id: 1033, title: "Secure Private Connectivity Between VMware and Object Storage: An Enterprise Architecture Guide", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-08-13", topics: ["Architecture", "Cloud"], url: "https://dzone.com/articles/vmware-object-storage-private-connectivity-guide", views: "2.5K", summary: "This guide details how to establish secure private connectivity between VMware and Object Storage using Cloud Service Endpoints." },
    { id: 1034, title: "DSPy Framework: A Comprehensive Technical Guide With Executable Examples", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-08-11", topics: ["AI"], url: "https://dzone.com/articles/dspy-framework-technical-guide", views: "5.7K", summary: "DSPy improves AI development by replacing prompt engineering with patterns. This guide explores how DSPy's features enable language model applications." },
    { id: 1035, title: "Resolving Secrets Manager DNS Resolution Errors in Terraform and Pulumi IaC", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2025, date: "2025-08-08", topics: ["Security", "DevOps"], url: "https://vidyasagarmsc.medium.com/resolving-ibm-secrets-manager-dns-resolution-errors-in-terraform-and-pulumi-iac-631a90d47b7c", also: {"Dev.to": "https://dev.to/vidyasagarmsc/resolving-secrets-manager-dns-resolution-errors-in-terraform-and-pulumi-iac-29hj"}, readingTime: "4 min", summary: "To understand Pulumi and its components, refer to this introduction" },
    { id: 1036, title: "The Twelve-Factor Agents: Building Production-Ready LLM Applications", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-07-17", topics: ["AI", "Architecture"], url: "https://dzone.com/articles/understanding-twelve-factor-agents", views: "6.4K", summary: "This article delves into the concept of the Twelve-Factor Agent, an architectural pattern designed to create robust, scalable, and maintainable…" },
    { id: 1037, title: "Advanced SSL Certificate Troubleshooting for Windows: Chain of Trust, Debugging, and Best Practices", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-07-15", topics: ["Security"], url: "https://dzone.com/articles/advanced-ssl-certificate-troubleshooting-windows", views: "4.1K", summary: "SSL/TLS certificates are foundational to secure communications on the internet. Windows environments present unique challenges that go beyond basics." },
    { id: 1038, title: "Troubleshooting SSL: Why Your SSL Certificate Isn't Working on Windows", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2025, date: "2025-06-13", topics: ["Security"], url: "https://hackernoon.com/troubleshooting-ssl-why-your-ssl-certificate-isnt-working-on-windows", readingTime: "7 min", summary: "SSL certificates are stored in various file formats, each with its own structure and purpose." },
    { id: 1039, title: "AI Agent Architectures: Patterns, Applications, and Implementation Guide", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-06-13", topics: ["AI", "Architecture"], url: "https://dzone.com/articles/ai-agent-architectures-patterns-applications-guide", views: "7.4K", summary: "AI agent architectures provide structural blueprints for designing intelligent systems that perceive environments, process information, and execute…" },
    { id: 1040, title: "Post-Quantum Cryptography: The Next Frontier in Cybersecurity", platform: "Substack", platforms: ["Substack"], year: 2025, date: "2025-05-26", topics: ["Quantum", "Security", "Developer Advocacy"], url: "https://vmacwrites.substack.com/p/post-quantum-cryptography-the-next", summary: "Don’t wait for quantum computers to arrive. Start your post-quantum journey today." },
    { id: 1041, title: "The Essential Role of Process Monitoring Scripts in Linux Environments", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2025, date: "2025-05-12", topics: ["Observability"], url: "https://vidyasagarmsc.medium.com/the-essential-role-of-process-monitoring-scripts-in-linux-environments-50d6a241f924", also: {"Dev.to": "https://dev.to/vidyasagarmsc/the-essential-role-of-process-monitoring-scripts-in-linux-environments-2pe5"}, readingTime: "4 min", summary: "In today’s complex computing environments, keeping tabs on running processes isn’t just good practice — it’s absolutely critical. Whether…" },
    { id: 1042, title: "A Complete Guide to Modern AI Developer Tools", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-05-09", topics: ["AI"], url: "https://dzone.com/articles/a-complete-guide-to-modern-ai-developer-tools", views: "7.9K", summary: "This guide explores the most impactful AI developer tools, highlighting their features, installation steps, strengths, and limitations." },
    { id: 1043, title: "Podman: Detailed Overview, Advantages, Disadvantages, and Setup", platform: "Dev.to", platforms: ["Dev.to"], year: 2025, date: "2025-05-04", topics: ["Containers", "Developer Advocacy", "Open Source"], url: "https://dev.to/vidyasagarmsc/podman-detailed-overview-advantages-disadvantages-and-setup-31gg", readingTime: "3 min", summary: "Podman is an open-source container engine that enables users to create, manage, and run OCI..." },
    { id: 1044, title: "Emerging Data Architectures: The Future of Data Management", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-04-15", topics: ["Data Science", "Architecture"], url: "https://dzone.com/articles/data-architectures-future-of-data-management", views: "8.2K", summary: "This article explores the latest advancements in data architecture, focusing on frameworks and newer paradigms such as LakeDB and zero ETL architectures." },
    { id: 1045, title: "Ansible Security and Testing Tools for Automation", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-03-28", topics: ["Security", "DevOps"], url: "https://dzone.com/articles/ansible-security-and-testing-tools-for-automation", views: "9.1K", summary: "Essential collection of security and testing tools and framework for your Ansible automation. Reduce the security risk using the tools." },
    { id: 1046, title: "Understanding Transcendental Numbers: Their Role in Mathematics, AI, and Quantum Computing", platform: "Substack", platforms: ["Substack"], year: 2025, date: "2025-03-17", topics: ["Quantum", "AI", "Mathematics"], url: "https://vmacwrites.substack.com/p/understanding-transcendental-numbers", summary: "Transcendental numbers are a class of real or complex numbers that are not algebraic." },
    { id: 1047, title: "S3cmd: CLI for Object Storage", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2025, date: "2025-03-05", topics: ["Python", "Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/s3cmd-cli-for-object-storage-87a02e4b300b", also: {"Dev.to": "https://dev.to/vidyasagarmsc/s3cmd-cli-for-object-storage-2j02"}, readingTime: "3 min", summary: "In the recent times, I am exploring and playing with Top Tools for Object Storage and Data Management. In this journey, one of the tools…" },
    { id: 1048, title: "Modern Data Processing Libraries: Beyond Pandas", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-03-03", topics: ["Python"], url: "https://dzone.com/articles/modern-data-processing-libraries-beyond-pandas", views: "6.8K", summary: "In this article, we explore the alternatives to pandas for data processing and data analysis. We'll compare and contrast based on performance." },
    { id: 1049, title: "A Comprehensive Guide to IAM in Object Storage", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-02-25", topics: ["Developer Advocacy"], url: "https://dzone.com/articles/guide-to-iam-in-object-storage", views: "5.8K", summary: "In this article, learn about identity access management, service IDs, service credentials, and their role in securing access to object storage on the…" },
    { id: 1050, title: "Observability and DevTool Platforms for AI Agents", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-02-19", topics: ["AI", "Observability"], url: "https://dzone.com/articles/observability-and-devtool-platforms-for-ai-agents", views: "19.2K", summary: "Check the platforms that provide developers with powerful tools to monitor, debug, and optimize AI agents, ensuring their reliability, efficiency, and…" },
    { id: 1051, title: "Logfire: Uncomplicated Observability for Python Applications", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-02-11", topics: ["Observability", "Python"], url: "https://dzone.com/articles/logfire-uncomplicated-observability-for-python-app", views: "6.1K", summary: "Learn about Logfire, an observability platform designed to provide developers with powerful insights into their Python applications." },
    { id: 1052, title: "Pydantic: Simplifying Data Validation in Python", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-02-03", topics: ["Python"], url: "https://dzone.com/articles/pydantic-simplifying-data-validation-in-python", views: "3.6K", summary: "Pydantic is a powerful Python library that uses type annotations to validate data structures. Learn about the powerful features of Pydantic with code…" },
    { id: 1053, title: "Top Tools for Object Storage and Data Management", platform: "DZone", platforms: ["DZone"], year: 2025, date: "2025-01-27", topics: ["Security", "Cloud"], url: "https://dzone.com/articles/top-tools-object-storage-data-management", views: "6.0K", summary: "The best tools for object storage, including MinIO, Cyberduck, and more, to efficiently manage and store unstructured data in modern cloud environments." },
    { id: 1054, title: "An Introduction to SymPy: A Python Library for Symbolic Mathematics", platform: "Medium", platforms: ["Medium", "Dev.to", "Substack"], year: 2025, date: "2025-01-04", topics: ["Python", "Mathematics", "Open Source"], url: "https://vidyasagarmsc.medium.com/an-introduction-to-sympy-a-python-library-for-symbolic-mathematics-ad13e70d5591", also: {"Dev.to": "https://dev.to/vidyasagarmsc/an-introduction-to-sympy-a-python-library-for-symbolic-mathematics-4gig", "Substack": "https://vmacwrites.substack.com/p/an-introduction-to-sympy-a-python"}, readingTime: "4 min", summary: "SymPy is an open-source Python library for symbolic mathematics." },
    { id: 1055, title: "Pandas: Conversion using loc and iloc", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2025, date: "2025-01-01", topics: ["Python"], url: "https://vidyasagarmsc.medium.com/pandas-conversion-using-loc-and-iloc-d89d16010b49", also: {"Dev.to": "https://dev.to/vidyasagarmsc/pandas-conversion-using-loc-and-iloc-594b"}, readingTime: "2 min", summary: "Pandas is a powerful Python library used for data manipulation and analysis." },
    { id: 1056, title: "Reflecting on My 2024 Journey: Achievements and Growth", platform: "Dev.to", platforms: ["Dev.to", "VMacWrites"], year: 2024, date: "2024-12-08", topics: ["Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/reflecting-on-my-2024-journey-achievements-and-growth-1joj", also: {"VMacWrites": "https://vmacwrites.wordpress.com/2024/12/08/reflecting-on-my-2024-journey-achievements-and-growth/"}, readingTime: "4 min", summary: "As I think on 2024, I’m overwhelmed with gratitude and excitement for the incredible journey I’ve..." },
    { id: 1057, title: "Nvidia MIG with GPU Optimization in Kubernetes", platform: "Medium", platforms: ["Medium", "Substack"], year: 2024, date: "2024-12-07", topics: ["Kubernetes", "Mathematics"], url: "https://vidyasagarmsc.medium.com/nvidia-mig-with-gpu-optimization-in-kubernetes-09a321b78993", also: {"Substack": "https://vmacwrites.substack.com/p/nvidia-mig-with-gpu-optimization"}, readingTime: "4 min", summary: "Multi-Instance GPU (MIG) is a technology that allows partitioning of a single GPU into multiple smaller, isolated GPU instances. This…" },
    { id: 1058, title: "Nurturing the Developer Within: A Journey of Growth and Community", platform: "Dev.to", platforms: ["Dev.to"], year: 2024, date: "2024-12-01", topics: ["Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/nurturing-the-developer-within-a-journey-of-growth-and-2n9o", readingTime: "3 min", summary: "In the ever-evolving landscape of technology, keeping the developer inside you alive is not just a..." },
    { id: 1059, title: "Model Context Protocol Overview", platform: "Medium", platforms: ["Medium", "Substack"], year: 2024, date: "2024-12-01", topics: ["AI", "Open Source"], url: "https://vidyasagarmsc.medium.com/model-context-protocol-overview-5a15a57e69c4", also: {"Substack": "https://vmacwrites.substack.com/p/model-context-protocol-overview"}, readingTime: "3 min", summary: "Anthropic has introduced the Model Context Protocol (MCP), an open-source standard designed to simplify and standardize connections between…" },
    { id: 1060, title: "Mastering Secure Connections: A Comprehensive Guide to Accessing Sybase Databases From macOS", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-11-27", topics: ["Security", "Data Science"], url: "https://dzone.com/articles/accessing-sybase-databases-from-macos", views: "2.6K", summary: "This article provides a step-by-step guide for configuring SSL and securely connecting to Sybase databases from macOS with tools like DataGrip." },
    { id: 1061, title: "IceCream: A Sweet Alternative to Print Debugging in Python", platform: "Dev.to", platforms: ["Dev.to"], year: 2024, date: "2024-11-20", topics: ["Python", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/icecream-a-sweet-alternative-to-print-debugging-in-python-1lhg", readingTime: "2 min", summary: "Tired of cluttering your code with print statements for debugging? Enter IceCream, a Python library..." },
    { id: 1062, title: "Chain of Trust: Decoding SSL Certificate Security Architecture", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2024, date: "2024-11-18", topics: ["Security", "Architecture"], url: "https://vidyasagarmsc.medium.com/chain-of-trust-decoding-ssl-certificate-security-architecture-2bde46655d37", also: {"Dev.to": "https://dev.to/vidyasagarmsc/chain-of-trust-decoding-ssl-certificate-security-architecture-9lo"}, readingTime: "5 min", summary: "This article is part of a 3-part article series covering beginners to advanced SSL security architecture. Please refer to the further…" },
    { id: 1063, title: "Data Architectures With Emphasis on Emerging Trends", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-10-23", topics: ["Architecture"], url: "https://dzone.com/articles/data-architectures-emphasis-on-emerging-trends", views: "5.8K", summary: "This article gives you a thorough rundown of the newest data architectures, tools, and technologies with an emphasis on emerging trends." },
    { id: 1064, title: "Git push: fatal: the remote end hung up unexpectedly", platform: "Dev.to", platforms: ["Dev.to"], year: 2024, date: "2024-09-10", topics: ["Open Source", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/git-push-fatal-the-remote-end-hung-up-unexpectedly-29bi", readingTime: "4 min", summary: "Everthing was working as expected when I closed my laptop yesterday and today morning when I try..." },
    { id: 1065, title: "The Need for Application Security Testing", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-08-12", topics: ["Security"], url: "https://dzone.com/articles/the-need-for-application-security-testing", views: "4.5K", summary: "Application security testing is an integral part of the development process. It is aimed at revealing and addressing security issues earlier rather than…" },
    { id: 1066, title: "Understanding Linux Permissions", platform: "Dev.to", platforms: ["Dev.to", "Medium"], year: 2024, date: "2024-08-07", topics: ["Security", "DevOps", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/understanding-linux-permissions-363a", alsoPublished: [{ venue: "Medium", date: "2024-08-07", url: "https://vidyasagarmsc.medium.com/understanding-linux-permissions-fe11c77371ad" }], readingTime: "2 min", summary: "Linux file permissions are a cornerstone of system security and access control. They dictate who can..." },
    { id: 1067, title: "Shingling in the Generative AI Era", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2024, date: "2024-07-23", topics: ["AI"], url: "https://hackernoon.com/shingling-in-the-generative-ai-era", readingTime: "13 min", summary: "By using techniques like shingling, generative AI can uncover hidden relationships within text data, facilitating a deeper comprehension of content…" },
    { id: 1068, title: "Enhance IaC Security With Mend Scans", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-07-05", topics: ["Security"], url: "https://dzone.com/articles/enhance-iac-security-with-mend-scans", views: "13.1K", summary: "Learn to incorporate Mend into your IaC workflows, improve infrastructure security posture, reduce the risk of misconfigurations, and ensure compliance." },
    { id: 1069, title: "Shingling for Similarity and Plagiarism Detection", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-06-25", topics: ["Mathematics"], url: "https://dzone.com/articles/shingling-for-similarity-and-plagiarism-detection", views: "7.5K", summary: "This article introduces you to the concept of shingling, the basics of the shingling technique, Jaccard similarity, advanced techniques, and optimizations." },
    { id: 1070, title: "Generate Your Next Headshot", platform: "Substack", platforms: ["Substack"], year: 2024, date: "2024-06-12", topics: ["AI"], url: "https://vmacwrites.substack.com/p/generate-your-next-headshot", summary: "Free Professional Photoshoot with AI" },
    { id: 1071, title: "Ansible: No python interpreters found for host", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2024, date: "2024-06-12", topics: ["DevOps", "Python"], url: "https://vidyasagarmsc.medium.com/ansible-no-python-interpreters-found-for-host-4184fb5eda8b", also: {"Dev.to": "https://dev.to/vidyasagarmsc/ansible-no-python-interpreters-found-for-host-4dpf"}, readingTime: "3 min", summary: "The error message “[WARNING]: No python interpreters found for host (tried [‘python3.12’, ‘python3.11’, ‘python3.10’, ‘python3.9’…" },
    { id: 1072, title: "Ansible Code Scanning and Quality Checks With SonarQube", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-06-12", topics: ["Security", "DevOps", "Architecture"], url: "https://dzone.com/articles/ansible-code-scanning-and-quality-with-sonarqube", views: "9.0K", summary: "Learn how to set up and configure the SonarQube plugin to analyze Ansible playbooks and roles for security vulnerabilities and technical debt." },
    { id: 1073, title: "How to Deploy RAPIDs on GPU-Enabled Private Cloud", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2024, date: "2024-05-24", topics: ["Cloud"], url: "https://hackernoon.com/how-to-deploy-rapids-on-gpu-enabled-private-cloud", readingTime: "5 min", summary: "Learn how to set up a GPU-enabled virtual server instance (VSI) on a Virtual Private Cloud (VPC) and deploy RAPIDS using IBM Schematics." },
    { id: 1074, title: "Design and Deploy a Completely Private and Secured Networking Architecture on Cloud Using Automation", platform: "Hackernoon", platforms: ["Hackernoon"], year: 2024, date: "2024-05-23", topics: ["Security", "DevOps", "Architecture"], url: "https://hackernoon.com/design-and-deploy-a-completely-private-and-secured-networking-architecture-on-cloud-using-automation", readingTime: "8 min", summary: "With the introduction of Virtual Private Cloud, network security has become even more critical." },
    { id: 1075, title: "Securing the Generative AI Frontier: Specialized Tools and Frameworks for AI Firewall", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-05-03", topics: ["AI", "Security"], url: "https://dzone.com/articles/ai-firewall-guardrails-to-address-risks", views: "4.0K", summary: "In this article, you will learn about specialized tools and frameworks for prompt inspection and protection or AI firewalls." },
    { id: 1076, title: "Essential Math to Master AI and Quantum", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-04-16", topics: ["Quantum", "AI", "Mathematics"], url: "https://dzone.com/articles/essential-math-to-master-ai-and-quantum", views: "5.8K", summary: "Learn the essential subset of mathematical concepts to understand the underpinnings of artificial intelligence and quantum computing." },
    { id: 1077, title: "Ansible Beyond Automation", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-04-04", topics: ["DevOps", "Open Source"], url: "https://dzone.com/articles/ansible-beyond-automation", views: "14.8K", summary: "In this article, discover the wide range of tools and ecosystems that the open-source tool Ansible offers beyond automation." },
    { id: 1078, title: "Understanding Prompt Injection and Other Risks of Generative AI", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-04-02", topics: ["AI", "Security", "Cloud"], url: "https://dzone.com/articles/understanding-prompt-inject-and-other-risks", views: "10.7K", summary: "By prioritizing security, organizations can enhance trust, resilience, and reliability in their cloud and AI environments." },
    { id: 1079, title: "Transfer contents and files using SCP from remote to local machine via bastion", platform: "Dev.to", platforms: ["Dev.to"], year: 2024, date: "2024-03-01", topics: ["Developer Advocacy", "DevOps", "Security"], url: "https://dev.to/vidyasagarmsc/transfer-contents-and-files-using-scp-from-remote-to-local-machine-via-bastion-4f79", readingTime: "2 min", summary: "It's always a challenge to move content (text) and files between a remote machine and localhost..." },
    { id: 1080, title: "Transfer contents and files through a secured shell tunnel", platform: "Medium", platforms: ["Medium"], year: 2024, date: "2024-03-01", topics: ["Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/transfer-contents-and-files-through-a-secured-shell-tunnel-15be267b8081", readingTime: "2 min", summary: "In a secured environment, It’s always a challenge to move content (text) and files between a remote and local machines. The challenge…" },
    { id: 1081, title: "Norm of a One-Dimensional Tensor in Python Libraries", platform: "DZone", platforms: ["DZone"], year: 2024, date: "2024-02-12", topics: ["AI", "Python", "Mathematics"], url: "https://dzone.com/articles/norm-of-a-one-dimensional-tensor-in-python-libraries", views: "4.3K", summary: "Learn how to calculate the Euclidean (norm/distance) of a single-dimensional (1D) tensor in NumPy, SciPy, Scikit-Learn, TensorFlow, and PyTorch." },
    { id: 1082, title: "PyTorch / Jupyter notebook: ModuleNotFoundError: No module named ‘torch’", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2024, date: "2024-01-21", topics: ["AI", "Python"], url: "https://vidyasagarmsc.medium.com/pytorch-jupyter-notebook-modulenotfounderror-no-module-named-torch-e0f16dae1bdf", also: {"Dev.to": "https://dev.to/vidyasagarmsc/pytorch-jupyter-notebook-modulenotfounderror-no-module-named-torch-2c1o"}, readingTime: "2 min", summary: "In this post, you will learn about installing PyTorch, a deep learning library in Jupyter." },
    { id: 1083, title: "2023: A year in retrospective", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2023, date: "2023-12-16", topics: ["Cloud", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2023/12/16/2023-a-year-in-retrospective/", summary: "I enjoy interacting with people and sharing my thoughts through my blogs. This year, it's no different. I learnt new technologies. I explored interesting…" },
    { id: 1084, title: "Automate session recording on RHEL with Ansible", platform: "Medium", platforms: ["Medium"], year: 2023, date: "2023-09-19", topics: ["DevOps", "Architecture"], url: "https://vidyasagarmsc.medium.com/automate-session-recording-on-rhel-with-ansible-1a46e6f76e3f", readingTime: "5 min", summary: "Learn how to record SSH sessions on a Red Hat Enterprise Linux (RHEL) VSI in a private VPC network using in-built packages , Terraform…" },
    { id: 1085, title: "Deploy a Session Recording Solution Using Ansible and Audit Your Bastion Host", platform: "DZone", platforms: ["DZone"], year: 2023, date: "2023-09-16", topics: ["DevOps", "Architecture"], url: "https://dzone.com/articles/deploy-a-session-recording-solution-using-ansible", views: "6.9K", summary: "Learn how to record SSH sessions on a Red Hat Enterprise Linux VSI using in-built packages. The RHEL packages are installed using Ansible automation." },
    { id: 1086, title: "Architecting a Completely Private VPC Network and Automating the Deployment", platform: "DZone", platforms: ["DZone"], year: 2023, date: "2023-09-12", topics: ["DevOps", "Architecture", "Cloud"], url: "https://dzone.com/articles/build-a-private-vpc-network-architecture-and-deplo", views: "6.0K", summary: "Learn how to design and build a truly private virtual private cloud (VPC) network architecture and deploy the architecture with Terraform automation." },
    { id: 1087, title: "Ansible Automation with Generative AI", platform: "Medium", platforms: ["Medium"], year: 2023, date: "2023-07-08", topics: ["AI", "DevOps"], url: "https://vidyasagarmsc.medium.com/ansible-automation-with-generative-ai-591ff8ed57ba", readingTime: "2 min", summary: "Learn about how Ansible and Watson is bringing AI tools to your IDE to make your automation coding experience simpler, smoother, and more…" },
    { id: 1088, title: "Must-Have Infrastructure as Code Tools", platform: "DZone", platforms: ["DZone"], year: 2023, date: "2023-07-03", topics: ["DevOps", "Developer Advocacy"], url: "https://dzone.com/articles/must-have-terraform-tools", views: "4.9K", summary: "A small set of tools to make your Terraform coding journey smoother. Tools to Lint, visualize, document, and clean your Terraform HCL2 code." },
    { id: 1089, title: "Ansible code snippets for automation", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2023, date: "2023-07-01", topics: ["DevOps", "Cloud", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2023/07/01/ansible-code-snippets-for-automation/", summary: "I have been learning and writing Ansible for Cloud automation. Created thiscode repositoryto share my Ansible automation learnings as snippets. As I…" },
    { id: 1090, title: "Automation, Ansible, AI", platform: "DZone", platforms: ["DZone"], year: 2023, date: "2023-06-27", topics: ["AI", "DevOps"], url: "https://dzone.com/articles/automation-ansible-ai", views: "9.3K", summary: "Learn about how Ansible is bringing AI tools to your Integrated Development Environment to make your automation coding experience simpler, smoother, and…" },
    { id: 1091, title: "Ansible code snippets in YAML", platform: "Dev.to", platforms: ["Dev.to"], year: 2023, date: "2023-06-10", topics: ["DevOps", "Developer Advocacy", "Cloud"], url: "https://dev.to/vidyasagarmsc/ansible-code-snippets-in-yaml-5a23", readingTime: "2 min", summary: "I have been learning and writing Ansible for Cloud automation. Created this code repository to share..." },
    { id: 1092, title: "Lessons while building a static website", platform: "Dev.to", platforms: ["Dev.to"], year: 2023, date: "2023-05-14", topics: ["Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/lessons-while-building-a-static-website-8g3", readingTime: "2 min", summary: "I loved designing & developing websites in my free time. One place, I always experiment with new..." },
    { id: 1093, title: "Must have Terraform tools", platform: "Medium", platforms: ["Medium"], year: 2023, date: "2023-04-02", topics: ["DevOps", "Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/must-have-terraform-tools-4197971f00c", readingTime: "3 min", summary: "These tools makes your Terraform coding journey smoother. Lint, visualize, document, and clean your Terraform HCL2 code." },
    { id: 1094, title: "Matrix multiplication in Python", platform: "Dev.to", platforms: ["Dev.to"], year: 2023, date: "2023-01-17", topics: ["Python", "Mathematics"], url: "https://dev.to/vidyasagarmsc/matrix-multiplication-in-python-3icc", readingTime: "1 min", summary: "Learn how to do matrix multiplication in Python using @ operator. @ operator is supported in Python..." },
    { id: 1095, title: "Securely Connect to Redis and Utilize Benchmark Tools", platform: "Medium", platforms: ["Medium"], year: 2022, date: "2022-04-27", topics: ["Security", "Data Science", "Cloud"], url: "https://vidyasagarmsc.medium.com/securely-connect-to-redis-and-utilize-benchmark-tools-858aff56822d", readingTime: "3 min", summary: "Learn how to create an encrypted connection to redis-cli using a utility like Stunnel, and benchmark your Redis instance on IBM Cloud using…" },
    { id: 1096, title: "RabbitMQ throughput test using PerfTest and Autoscaling", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2022, date: "2022-04-15", topics: ["Data Science"], url: "https://vidyasagarmsc.medium.com/rabbitmq-throughput-test-using-perftest-and-autoscaling-2a6f0a1f86a0", also: {"Dev.to": "https://dev.to/vidyasagarmsc/rabbitmq-throughput-test-using-perftest-and-autoscaling-2b78"}, readingTime: "3 min", summary: "Learn how to test the performance of your RabbitMQ instance using PerfTest and enable autoscale to add more resources to the deployment…" },
    { id: 1097, title: "Schedule PostgreSQL Backups with IBM Cloud Code Engine", platform: "Medium", platforms: ["Medium"], year: 2022, date: "2022-03-31", topics: ["Containers", "Data Science", "Cloud"], url: "https://vidyasagarmsc.medium.com/schedule-postgresql-backups-with-ibm-cloud-code-engine-74cd1f207cde", readingTime: "5 min", summary: "Learn how to build a container image from source code and use the image to schedule your PostgreSQL backups using IBM Cloud Code Engine." },
    { id: 1400, title: "Adding Terraform rover to the list - https://github.com/im2nguyen/rover", platform: "Medium", platforms: ["Medium"], year: 2022, date: "2022-03-08", topics: ["Cloud", "DevOps"], url: "https://vidyasagarmsc.medium.com/adding-terraform-rover-to-the-list-https-github-com-im2nguyen-rover-4c9c9de798fc", summary: "" },
    { id: 1098, title: "Kubernetes Auditing: Which IAM User Deleted a Namespace?", platform: "DZone", platforms: ["DZone"], year: 2022, date: "2022-02-17", topics: ["Kubernetes", "Observability"], url: "https://dzone.com/articles/kubernetes-auditing-which-iam-user-deleted-a-names", views: "8.4K", summary: "Learn how to collect audit logs that are passed through the Kubernetes API server to IBM Log Analysis to check who initiated a request and when they did…" },
    { id: 1099, title: "Kubernetes Audit Logs: Who created or deleted a namespace?", platform: "Medium", platforms: ["Medium"], year: 2022, date: "2022-02-17", topics: ["Kubernetes", "Observability"], url: "https://vidyasagarmsc.medium.com/kubernetes-audit-logs-who-created-or-deleted-a-namespace-7d55c20d2730", readingTime: "3 min", summary: "Learn how to set up log forwarding and collect audit logs that are passed through the Kubernetes API server to IBM Log Analysis to check…" },
    { id: 1100, title: "Stream Landing Kafka Data to Object Storage using Terraform", platform: "Medium", platforms: ["Medium", "DZone Legacy"], year: 2021, date: "2021-12-07", topics: ["DevOps", "Data Science"], url: "https://vidyasagarmsc.medium.com/stream-landing-kafka-data-to-object-storage-using-terraform-f127e62fc637", alsoPublished: [{ venue: "DZone Legacy", date: "2021-12-09", views: "8,014", likes: 3, url: "https://web.archive.org/web/20220528172139/https://dzone.com/articles/stream-landing-kafka-data-to-object-storage-using" }], readingTime: "3 min", summary: "Learn how to archive your Event Streams Kafka data to Object Storage using SQL Query. This process, called stream landing, can be set up…" },
    { id: 1101, title: "Deploy RAPIDs on GPU-Enabled Virtual Servers on a Virtual Private Cloud", platform: "Medium", platforms: ["Medium", "DZone Legacy"], year: 2021, date: "2021-09-30", topics: ["Cloud"], url: "https://vidyasagarmsc.medium.com/deploy-rapids-on-gpu-enabled-virtual-servers-on-a-virtual-private-cloud-baf73baad2ae", alsoPublished: [{ venue: "DZone Legacy", date: "2021-10-03", views: "4,515", likes: 5 }], readingTime: "5 min", summary: "Learn how to set up a GPU-enabled virtual server instance (VSI) on a Virtual Private Cloud (VPC) and deploy RAPIDS using IBM Schematics." },
    { id: 1102, title: "Configure Slack to receive notifications about your Tekton Pipeline", platform: "Medium", platforms: ["Medium", "DZone Legacy"], year: 2021, date: "2021-08-20", topics: ["Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/configure-slack-to-receive-notifications-about-your-tekton-pipeline-f9a1631065fb", alsoPublished: [{ venue: "DZone Legacy", date: "2021-08-23", views: "6,142", likes: 3, url: "https://web.archive.org/web/20211024224618/https://dzone.com/articles/configure-slack-to-receive-notifications-about-you" }], readingTime: "4 min", summary: "Learn how to configure Slack to receive notifications about your Tekton Pipeline." },
    { id: 1103, title: "VPC Auto Scaling and Dedicated Hosts with Terraform", platform: "Medium", platforms: ["Medium", "DZone Legacy"], year: 2021, date: "2021-07-15", topics: ["DevOps", "Cloud"], url: "https://vidyasagarmsc.medium.com/vpc-auto-scaling-and-dedicated-hosts-with-terraform-b90aae1b49f7", alsoPublished: [{ venue: "DZone Legacy", date: "2021-07-16", views: "3,954", likes: 3, url: "https://web.archive.org/web/20210805013141/https://dzone.com/articles/vpc-auto-scaling-and-dedicated-hosts-with-terrafor" }], readingTime: "4 min", summary: "Learn how to configure and scale isolated workloads in shared and dedicated environments on Virtual Private Cloud." },
    { id: 1104, title: "Terraform unsensitive", platform: "Dev.to", platforms: ["Dev.to"], year: 2021, date: "2021-05-19", topics: ["DevOps", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/terraform-unsensitive-3gjp", readingTime: "1 min", summary: "For every sensitive=true in Terraform, there is a nonsensitive function... variable \"password\" {..." },
    { id: 1105, title: "How to update Spyder in Anaconda to 5.x?", platform: "Dev.to", platforms: ["Dev.to"], year: 2021, date: "2021-04-28", topics: ["Python", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/how-to-update-spyder-in-anaconda-to-5-x-4hoc", readingTime: "3 min", summary: "Spyder is one of my favorite IDE(Integrated Development Environment) for Python programming and visua..." },
    { id: 1106, title: "Multizone Kubernetes and VPC Load Balancer Setup", platform: "Medium", platforms: ["Medium", "DZone Legacy"], year: 2021, date: "2021-04-27", topics: ["Kubernetes"], url: "https://vidyasagarmsc.medium.com/multizone-kubernetes-and-vpc-load-balancer-setup-9664b3c9ea5d", alsoPublished: [{ venue: "DZone Legacy", date: "2021-05-03", views: "7,496", likes: 3 }], readingTime: "4 min", summary: "Securely expose your Kubernetes app by setting up a Load Balancer for VPC in a different zone." },
    { id: 1107, title: "Tools to Visualize your Terraform plan", platform: "DZone", platforms: ["DZone", "Medium", "Dev.to"], year: 2021, date: "2021-04-22", topics: ["DevOps", "Open Source"], url: "https://dzone.com/articles/tools-to-visualize-your-terraform-plan", alsoPublished: [{ venue: "Medium", date: "2021-04-22", url: "https://vidyasagarmsc.medium.com/tools-to-visualize-your-terraform-plan-d421c6255f9f" }], also: {"Medium": "https://vidyasagarmsc.medium.com/tools-to-visualize-your-terraform-plan-d421c6255f9f", "Dev.to": "https://dev.to/vidyasagarmsc/tools-to-visualize-your-terraform-plan-5g3"}, views: "8.4K", readingTime: "2 min", summary: "It all started with this code sample with Terraform scripts For starters, Terraform is open-source software, developed by HashiCorp, that enables…" },
    { id: 1108, title: "Run and Scale an Apache Spark Application on Kubernetes", platform: "DZone", platforms: ["DZone"], year: 2021, date: "2021-03-15", topics: ["Kubernetes", "Containers", "Data Science"], url: "https://dzone.com/articles/run-and-scale-an-apache-spark-application-on-kuber", views: "9.6K", summary: "Learn how to set up Apache Spark on IBM Cloud Kubernetes Service by pushing the Spark container images to IBM Cloud Container Registry...." },
    { id: 1109, title: "Update multiple lines in a YAML file with kubectl", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2021, date: "2021-03-02", topics: ["Kubernetes"], url: "https://vidyasagarmsc.medium.com/update-multiple-lines-in-a-yaml-file-with-kubectl-932ef81d9b41", also: {"Dev.to": "https://dev.to/vidyasagarmsc/update-multiple-lines-in-a-yaml-file-49fb"}, readingTime: "1 min", summary: "Whenever I need to update a YAML file, the first thing that comes to mind is to either use sed or awk or perl etc., But there's an…" },
    { id: 1110, title: "Image Classification with IBM Cloud Code Engine and TensorFlow", platform: "Medium", platforms: ["Medium", "DZone Legacy"], year: 2021, date: "2021-01-28", topics: ["AI", "Cloud", "Mathematics"], url: "https://vidyasagarmsc.medium.com/image-classification-with-ibm-cloud-code-engine-and-tensorflow-564fc6182592", alsoPublished: [{ venue: "DZone Legacy", date: "2021-02-16", views: "7,445", likes: 6 }], readingTime: "2 min", summary: "Learn about IBM Cloud™ Code Engine by deploying an image classification application with pre-defined MobileNet TensorFlow.js model." },
    { id: 1308, title: "Delete a Non-Empty COS Bucket Using Terraform", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2020, date: "2020-11-23", topics: ["Cloud", "DevOps"], url: "https://web.archive.org/web/20210128032609/https://dzone.com/articles/delete-a-non-empty-cos-bucket-using-terraform", views: "6,903", likes: 3, legacy: true, removedFromDZone: true, archived: true, summary: "Remove a Cloud Object Storage (COS) bucket that is not empty. Use a Terraform script to recursively delete all the objects of a Cloud Object Storage (COS) bucket using MinIO client." },
    { id: 1111, title: "Delete a bucket that is not empty", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2020, date: "2020-11-12", topics: ["DevOps", "Cloud"], url: "https://vidyasagarmsc.medium.com/delete-a-bucket-that-is-not-empty-55368eec7e21", also: {"Dev.to": "https://dev.to/vidyasagarmsc/delete-a-bucket-that-is-not-empty-1a6b"}, readingTime: "2 min", summary: "Remove a non-empty Cloud Object Storage (COS) bucket. The terraform script to recursively delete all the objects of a Cloud Object Storage…" },
    { id: 1112, title: "Adjust the speaking rate", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2020, date: "2020-11-09", topics: ["Cloud", "AI"], url: "https://vmacwrites.wordpress.com/2020/11/09/adjust-the-speaking-rate/", summary: "Stackoverflow is an ocean for learning and exploring. How? Try answering a question and you will understand 🙂 A few weeks ago, I saw this question on…" },
    { id: 1113, title: "Adjust speaking rate(SSML) via cURL POST", platform: "Dev.to", platforms: ["Dev.to", "DZone Legacy"], year: 2020, date: "2020-11-09", topics: ["Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/adjust-speaking-rate-ssml-via-curl-poe", alsoPublished: [{ venue: "DZone Legacy", date: "2020-12-14", views: "3,260", likes: 3 }], readingTime: "2 min", summary: "Stackoverflow is an ocean for learning and exploring. How? Try answering a question and you will unde..." },
    { id: 1309, title: "Deploy and Auto Scale Isolated Workloads Across Multiple Zones", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2020, date: "2020-10-27", topics: ["Cloud", "DevOps", "Security"], views: "4,683", likes: 3, legacy: true, removedFromDZone: true, archived: false, summary: "Provision and autoscale VSI on VPC using Terraform scripts and explore autoscale scenarios like SSL termination and end-to-end encryption." },
    { id: 1114, title: "Auto-scale instance on VPC using Terraform", platform: "Medium", platforms: ["Medium", "Dev.to"], year: 2020, date: "2020-10-21", topics: ["Security", "DevOps"], url: "https://vidyasagarmsc.medium.com/auto-scale-instance-on-vpc-using-terraform-fb708f9f1e4", also: {"Dev.to": "https://dev.to/vidyasagarmsc/auto-scale-instance-on-vpc-using-terraform-404f"}, readingTime: "4 min", summary: "Learn how to provision and auto scale VSI on VPC using Terraform scripts and explore auto scale scenarios like SSL termination (offloading)…" },
    { id: 1115, title: "Minikube: Exiting due to RSRC_INSUFFICIENT_REQ_MEMORY ⛔", platform: "Dev.to", platforms: ["Dev.to"], year: 2020, date: "2020-10-15", topics: ["Kubernetes", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/minikube-exiting-due-to-rsrcinsufficientreqmemory-1lp5", readingTime: "1 min", summary: "After many months, I tried starting Minikube(minikube start) on my machine to see the error in the ti..." },
    { id: 1116, title: "Deploy an image recognition app without provisioning a Kubernetes cluster", platform: "Dev.to", platforms: ["Dev.to", "Medium"], year: 2020, date: "2020-09-30", topics: ["Cloud", "Kubernetes", "DevOps"], url: "https://dev.to/vidyasagarmsc/deploy-an-image-recognition-app-without-provisioning-a-kubernetes-cluster-1a3n", alsoPublished: [{ venue: "Medium", date: "2020-09-30", url: "https://vidyasagarmsc.medium.com/deploy-an-image-recognition-app-without-provisioning-a-kubernetes-cluster-96d5193a4ff0" }], readingTime: "3 min", summary: "Learn to deploy a public frontend and a private backend app, bind Cloud services to the..." },
    { id: 1117, title: "Adding business hours to your chatbot", platform: "Dev.to", platforms: ["Dev.to"], year: 2020, date: "2020-08-14", topics: ["AI", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/adding-business-hours-to-your-chatbot-2f0p", readingTime: "1 min", summary: "Stackoverflow is the best place to find use cases along with numerous questions. One such question th..." },
    { id: 1118, title: "AND in grep", platform: "Dev.to", platforms: ["Dev.to"], year: 2020, date: "2020-08-07", topics: ["Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/and-in-grep-178p", readingTime: "2 min", summary: "While working on a shell or drafting scripts, two things I love the most is grep and awk. Let's start..." },
    { id: 1119, title: "Create Multiple Instances in a VPC Using Terraform", platform: "Dev.to", platforms: ["Dev.to", "DZone Legacy", "Medium"], year: 2020, date: "2020-08-06", topics: ["Cloud", "DevOps"], url: "https://dev.to/vidyasagarmsc/create-multiple-instances-in-a-vpc-using-terraform-1ojf", alsoPublished: [{ venue: "DZone Legacy", date: "2020-08-25", views: "8,074", likes: 5, url: "https://web.archive.org/web/20201121083542/https://dzone.com/articles/create-multiple-instances-in-a-vpc-using-terraform" }, { venue: "Medium", date: "2020-08-06", url: "https://vidyasagarmsc.medium.com/create-multiple-instances-in-a-vpc-using-terraform-8f8132ee5361" }], readingTime: "4 min", summary: "Learn how to provision multiple virtual server instances (VSIs) in a Virtual Private Cloud..." },
    { id: 1120, title: "Spread love with Python", platform: "Dev.to", platforms: ["Dev.to"], year: 2020, date: "2020-08-05", topics: ["Python", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/spread-love-with-python-3hg1", readingTime: "1 min", summary: "Past week, I was busy coding in Python for one of our demos (which turned into a blog post later). At..." },
    { id: 1121, title: "Extend VPC Resources with Cloud Functions, Activity Tracker with LogDNA, and Schematics", platform: "Dev.to", platforms: ["Dev.to", "DZone Legacy", "Medium"], year: 2020, date: "2020-07-31", topics: ["DevOps", "Python", "Cloud"], url: "https://dev.to/vidyasagarmsc/extend-vpc-resources-with-cloud-functions-activity-tracker-with-logdna-and-schematics-2m6a", alsoPublished: [{ venue: "DZone Legacy", date: "2020-08-04", views: "4,801", likes: 3, url: "https://web.archive.org/web/20230607082018/https://dzone.com/articles/extend-vpc-instances-with-cloud-functions-activity" }, { venue: "Medium", date: "2020-07-31", url: "https://vidyasagarmsc.medium.com/extend-vpc-resources-with-cloud-functions-activity-tracker-with-logdna-and-schematics-d3a313bca3f1" }], readingTime: "6 min", summary: "This post shows how to automatically assign a floating IP to a newly created VSI by..." },
    { id: 1122, title: "Service Mesh on Red Hat OpenShift", platform: "Dev.to", platforms: ["Dev.to", "Medium"], year: 2020, date: "2020-06-02", topics: ["Kubernetes", "Architecture", "Cloud"], url: "https://dev.to/vidyasagarmsc/service-mesh-on-red-hat-openshift-1h4", alsoPublished: [{ venue: "Medium", date: "2020-06-02", url: "https://vidyasagarmsc.medium.com/service-mesh-on-red-hat-openshift-65f4f4d5826d" }], readingTime: "2 min", summary: "How to install Red Hat OpenShift Service Mesh alongside microservices in a Red Hat OpenShift..." },
    { id: 1123, title: "Container to container communication with bridge network", platform: "Dev.to", platforms: ["Dev.to", "VMacWrites", "Medium"], year: 2020, date: "2020-04-09", topics: ["Containers"], url: "https://dev.to/vidyasagarmsc/container-to-container-communication-with-bridge-network-49k2", alsoPublished: [{ venue: "Medium", date: "2020-04-13", url: "https://vidyasagarmsc.medium.com/container-to-container-communication-with-bridge-network-9941774a5c21" }], also: {"VMacWrites": "https://vmacwrites.wordpress.com/2020/04/09/container-to-container-communication-with-bridge-network/"}, readingTime: "2 min", summary: "In this post, you will learn how to establish container to container communication by creating a..." },
    { id: 1401, title: "Build and deploy an image classification deep learning model on a POWER-based GPU server", platform: "Medium", platforms: ["Medium"], year: 2020, date: "2020-04-07", topics: ["Cloud", "DevOps", "Data Science"], url: "https://vidyasagarmsc.medium.com/build-and-deploy-an-image-classification-deep-learning-model-on-a-power-based-gpu-server-c4dcc65f7e1b", summary: "Learn how to provision a POWER-based GPU server with IBM Visual Insights on your own Virtual Private Cloud (VPC) and buil ... a deep learning..." },
    { id: 1124, title: "Alternate Ways to Create an OpenShift Project", platform: "Dev.to", platforms: ["Dev.to", "Medium"], year: 2019, date: "2019-10-25", topics: ["Kubernetes", "DevOps", "Cloud"], url: "https://dev.to/vidyasagarmsc/alternate-ways-to-create-an-openshift-project-3np9", alsoPublished: [{ venue: "Medium", date: "2019-10-25", url: "https://vidyasagarmsc.medium.com/alternate-ways-to-create-an-openshift-project-3e934df786ff" }], readingTime: "4 min", summary: "This post explains two of the ways to create an OpenShift project-inside the Jenkinsfile a..." },
    { id: 1125, title: "Build a Container Image from Source-Code using S2I and Push It to a PrivateRegistry", platform: "Dev.to", platforms: ["Dev.to", "DZone Legacy", "Medium"], year: 2019, date: "2019-09-12", topics: ["Containers"], url: "https://dev.to/vidyasagarmsc/build-a-container-image-from-source-code-using-s2i-and-push-it-to-a-privateregistry-250m", alsoPublished: [{ venue: "DZone Legacy", date: "2019-11-15", views: "9,505", likes: 5 }, { venue: "Medium", date: "2019-09-12", url: "https://vidyasagarmsc.medium.com/build-a-container-image-from-source-code-using-s2i-and-push-it-to-a-privateregistry-926b8dd3be11" }], readingTime: "3 min", summary: "Build a Container Image from Source-Code using S2I and Push It to a Private Registry..." },
    { id: 1402, title: "Scaffold and Deploy a Scalable Web Application to OpenShift", platform: "Medium", platforms: ["Medium"], year: 2019, date: "2019-08-26", topics: ["Cloud"], url: "https://vidyasagarmsc.medium.com/scaffold-and-deploy-a-scalable-web-application-to-openshift-32170e427ca3", summary: "This post is an excerpt from a solution tutorial that walks you through on how to scaffold a web application, run it locally in a..." },
    { id: 1403, title: "Upload Data and Generate an ML Model Quickly with AutoAI", platform: "Medium", platforms: ["Medium"], year: 2019, date: "2019-08-13", topics: ["Cloud", "Data Science", "AI"], url: "https://vidyasagarmsc.medium.com/upload-data-and-generate-an-ml-model-quickly-with-autoai-eaa4c676e9a1", summary: "The hardest decision in the process of building a machine learning model is deciding on which algorithm to use." },
    { id: 1404, title: "Monitor Your Deployed Machine Learning Model with OpenScale", platform: "Medium", platforms: ["Medium"], year: 2019, date: "2019-08-09", topics: ["Cloud", "AI", "Data Science"], url: "https://vidyasagarmsc.medium.com/monitor-your-deployed-machine-learning-model-with-openscale-d0b7c79d9e5", summary: "IBM Watson OpenScale allows enterprises to automate and operationalize the AI lifecycle in business applications." },
    { id: 1126, title: "Container registry unauthorized: authentication required", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2019, date: "2019-04-05", topics: ["Cloud", "Kubernetes", "Open Source"], url: "https://vmacwrites.wordpress.com/2019/04/05/icr-io-unauthorized-authentication-required/", summary: "IBM Cloud container registry(ICR) imagepull fails on IBM Cloud Kubernetes(IKS) cluster with Unauthorized: authentication required error. Here's what you…" },
    { id: 1127, title: "Istio on Windows 10", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2019, date: "2019-02-06", topics: ["Cloud", "Open Source", "AI"], url: "https://vmacwrites.wordpress.com/2019/02/06/istio-on-windows-10/", summary: "In this post, you will learn how to setup Istioctl on Windows 10 to run Istio service mesh commands on your command prompt(CMD). Before jumping into the…" },
    { id: 1128, title: "Knative Monitoring with Sysdig on IBM Cloud", platform: "Dev.to", platforms: ["Dev.to", "DZone Legacy", "Medium"], year: 2019, date: "2019-01-09", topics: ["Cloud", "Observability"], url: "https://dev.to/vidyasagarmsc/knative-monitoring-with-sysdig-on-ibm-cloud-5245", alsoPublished: [{ venue: "DZone Legacy", date: "2019-01-30", views: "9,194", likes: 4 }, { venue: "Medium", date: "2019-01-09", url: "https://vidyasagarmsc.medium.com/knative-monitoring-with-sysdig-on-ibm-cloud-dc206c3f413d" }], readingTime: "5 min", summary: "After learning on how to deploy an app to Knative on IBM Cloud and how to do Knative log analysis..." },
    { id: 1129, title: "Knative Log analysis with LogDNA on IBM Cloud", platform: "Dev.to", platforms: ["Dev.to", "DZone Legacy", "Medium"], year: 2019, date: "2019-01-07", topics: ["Kubernetes", "Cloud"], url: "https://dev.to/vidyasagarmsc/knative-log-analysis-with-logdna-on-ibm-cloud-34ag", alsoPublished: [{ venue: "DZone Legacy", date: "2019-01-31", views: "8,302", likes: 5, url: "https://web.archive.org/web/20230204014318/https://dzone.com/articles/knative-log-analysis-with-logdna-on-ibm-cloud" }, { venue: "Medium", date: "2019-01-07", url: "https://vidyasagarmsc.medium.com/knative-log-analysis-with-logdna-on-ibm-cloud-568c4f5edfa0" }], readingTime: "5 min", summary: "In this post, you will learn how to use the IBM Log Analysis with LogDNA service to configure cluster..." },
    { id: 1130, title: "Knative Monitoring, Logging, and Tracing Explained", platform: "DZone", platforms: ["DZone"], year: 2018, date: "2018-11-15", topics: ["Observability"], url: "https://dzone.com/articles/knative-monitoring-with-grafana-zipkin-weavescope", views: "11.3K", summary: "Learn how to set up performance monitoring, logging, and tracing for telemetry with Knative." },
    { id: 1131, title: "Create a presigned URL to download an object in Python 3.x", platform: "VMacWrites", platforms: ["VMacWrites", "Medium"], year: 2018, date: "2018-11-05", topics: ["Cloud", "Python"], url: "https://vmacwrites.wordpress.com/2018/11/05/create-a-presigned-url-to-download-an-object-in-python-3-x/", alsoPublished: [{ venue: "Medium", date: "2018-11-05", url: "https://vidyasagarmsc.medium.com/create-a-presigned-url-to-download-an-object-in-python-3-x-1a449cae56cf" }], summary: "Presigned URLs in Cloud Object Storage create a temporary link that can be used to share an object publicly for direct download. In one of my…" },
    { id: 1132, title: "Build a Container Image Inside a K8s Cluster", platform: "DZone", platforms: ["DZone"], year: 2018, date: "2018-10-30", topics: ["Kubernetes", "Containers"], url: "https://dzone.com/articles/build-a-container-image-inside-a-k8s-cluster", views: "13.5K", summary: "Take a look at how you can build a container image inside Kubernetes without using the Docker daemon through Google's Kaniko." },
    { id: 1133, title: "Knative monitoring with Grafana, Zipkin, Weavescope & other plugins..", platform: "Dev.to", platforms: ["Dev.to", "Medium"], year: 2018, date: "2018-10-09", topics: ["Kubernetes", "Cloud", "Observability"], url: "https://dev.to/vidyasagarmsc/knative-monitoring-with-grafana-zipkin-weavescope--other-plugins-4g9o", alsoPublished: [{ venue: "Medium", date: "2018-10-09", url: "https://vidyasagarmsc.medium.com/knative-monitoring-with-grafana-zipkin-weavescope-other-plugins-30a2d8d20344" }], readingTime: "5 min", summary: "In this post, you will see the telemetry side of Knative and Istio for a nodejs app named..." },
    { id: 1134, title: "Install Knative with Istio on IBM Cloud", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2018, date: "2018-10-09", topics: ["Cloud", "Open Source", "Kubernetes"], url: "https://vmacwrites.wordpress.com/2018/10/09/install-knative-with-istio-on-ibm-cloud/", alsoPublished: [{ venue: "DZone Legacy", date: "2018-10-09", views: "6,484", likes: 5 }], summary: "This post provides you step-by-step instructions to install Knative with Istio on IBM Cloud Kubernetes Service(IKS), build and push your image to IBM…" },
    { id: 1135, title: "Build a container image inside a K8s cluster and push it to IBM Cloud Container Registry", platform: "Dev.to", platforms: ["Dev.to", "Medium"], year: 2018, date: "2018-10-08", topics: ["Cloud", "Kubernetes", "Containers"], url: "https://dev.to/vidyasagarmsc/build-a-container-image-inside-a-k8s-cluster-and-push-it-to-ibm-cloud-container-registry-448n", alsoPublished: [{ venue: "Medium", date: "2018-10-08", url: "https://vidyasagarmsc.medium.com/build-a-container-image-inside-a-k8s-cluster-and-push-it-to-ibm-cloud-container-registry-abac9b1e5246" }], readingTime: "4 min", summary: "Build a container image inside a Kubernetes cluster and push it to IBM Cloud Container..." },
    { id: 1136, title: "Install Knative with Istio on IBM Cloud: the hard way", platform: "Dev.to", platforms: ["Dev.to", "Medium"], year: 2018, date: "2018-10-04", topics: ["Cloud", "Kubernetes"], url: "https://dev.to/vidyasagarmsc/install-knative-with-istio-on-ibm-cloud-2fd9", alsoPublished: [{ venue: "Medium", date: "2018-10-04", url: "https://vidyasagarmsc.medium.com/install-knative-with-istio-on-iks-cluster-and-deploy-an-app-on-ibm-cloud-7b7d368b9833" }], readingTime: "4 min", summary: "In this tutorial, learn how easy it is to install Knative with Istio on IBM Cloud Kubernetes..." },
    { id: 1137, title: "Obtain and visualise uniform metrics, logs, traces across microservices using Istio", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2018, date: "2018-06-28", topics: ["Cloud", "Open Source", "Kubernetes"], url: "https://vmacwrites.wordpress.com/2018/06/28/obtain-and-visualise-uniform-metrics-logs-traces-across-microservices-using-istio/", alsoPublished: [{ venue: "DZone Legacy", date: "2018-07-03", views: "3,457", likes: 4 }], summary: "In this blog post, you will learn how to setup Istio on your Kubernetes cluster using Helm or Kubernetes-YAML and you will be using add-ons like Jaeger…" },
    { id: 1138, title: "Deploy an app to Kubernetes using a Helm chart", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2018, date: "2018-06-01", topics: ["Cloud", "Open Source", "Kubernetes"], url: "https://vmacwrites.wordpress.com/2018/06/01/deploy-an-app-to-kubernetes-using-a-helm-chart/", summary: "This blog post walks you through how to scaffold a web application, run it locally in a container, and then deploy it to a Kubernetes cluster created with…" },
    { id: 1139, title: "Deploy a scalable web app to Kubernetes using Helm", platform: "Dev.to", platforms: ["Dev.to", "DZone Legacy", "Medium"], year: 2018, date: "2018-05-31", topics: ["Containers", "Kubernetes", "Developer Advocacy"], url: "https://dev.to/vidyasagarmsc/deploy-a-scalable-web-app-to-kubernetes-using-helm-1gf6", alsoPublished: [{ venue: "DZone Legacy", date: "2018-06-01", views: "4,839", likes: 4 }, { venue: "Medium", date: "2018-05-30", url: "https://vidyasagarmsc.medium.com/deploy-a-scalable-web-application-to-kubernetes-using-helm-f33581a9381" }], readingTime: "6 min", summary: "This blog post walks you through how to scaffold a web application, run it locally in a container,..." },
    { id: 1140, title: "What's in IBM Cloud for Developers", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2018, date: "2018-05-26", topics: ["Cloud"], url: "https://vmacwrites.wordpress.com/2018/05/26/whats-in-ibm-cloud-for-developers/", summary: "In this post, you will learn what's in store for developers and how they can leverage 170+ unique services on IBM Cloud platform. Cloud computing, often…" },
    { id: 1141, title: "Awesome-AI: The guide to master artificial intelligence", platform: "Dev.to", platforms: ["Dev.to", "VMacWrites", "Medium"], year: 2018, date: "2018-05-13", topics: ["AI"], url: "https://dev.to/vidyasagarmsc/awesome-ai-the-guide-to-master-artificial-intelligence-35k3", alsoPublished: [{ venue: "Medium", date: "2018-05-13", url: "https://vidyasagarmsc.medium.com/awesome-ai-the-guide-to-master-artificial-intelligence-a7823611299a" }], also: {"VMacWrites": "https://vmacwrites.wordpress.com/2018/07/18/awesome-ai-the-guide-to-master-artificial-intelligence/"}, readingTime: "4 min", summary: "A curated list of articles, books, MOOCs, infographics and many more covering Artificial Int..." },
    { id: 1142, title: "Build and Interact With This Chatbot Through Voice and Audio", platform: "DZone", platforms: ["DZone", "Medium"], year: 2018, date: "2018-04-27", topics: ["Developer Advocacy"], url: "https://dzone.com/articles/build-and-interact-with-this-chatbot-through-voice", alsoPublished: [{ venue: "Medium", date: "2018-04-23", url: "https://vidyasagarmsc.medium.com/interact-with-this-chatbot-through-voice-and-audio-81b5c0c9b10b" }], views: "8.8K", summary: "This tutorial walks you through the process of defining intents and entities and building a dialog flow for your chatbot to respond to customer queries." },
    { id: 1318, title: "Build a Voice-Enabled Android Chatbot", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2018, date: "2018-04-26", topics: ["AI", "Developer Advocacy"], views: "6,620", likes: 6, legacy: true, removedFromDZone: true, archived: false, summary: "Walk through the process of defining intents and entities and building a dialog flow for your chatbot to respond to customer queries." },
    { id: 1143, title: "Build,deploy, and retrain a machine learning model using iris dataset", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2018, date: "2018-03-12", topics: ["Cloud", "AI"], url: "https://vmacwrites.wordpress.com/2018/03/12/build-deploy-test-and-retrain-a-predictive-machine-learning-model/", alsoPublished: [{ venue: "DZone Legacy", date: "2018-03-13", views: "4,109", likes: 5, url: "https://web.archive.org/web/20221212010126/https://dzone.com/articles/the-journey-of-a-machine-learning-model-from-build" }, { venue: "Medium", date: "2018-03-11", url: "https://vidyasagarmsc.medium.com/the-journey-of-a-machine-learning-model-from-building-to-retraining-fe3a37c32307" }], summary: "This post is an excerpt from our solution tutorial that walks you through the process of building a predictive machine learning model, deploying it as an…" },
    { id: 1144, title: "Detect Anomalies in mobile sensor data using Machine Learning", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2018, date: "2018-02-16", topics: ["Cloud", "AI", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2018/02/16/detect-anomalies-in-mobile-sensor-data-using-machine%e2%80%8b-learning/", alsoPublished: [{ venue: "DZone Legacy", date: "2018-02-22", views: "9,666", likes: 7, url: "https://web.archive.org/web/20221225193338/https://dzone.com/articles/anomaly-detection-in-mobile-sensor-data-using-ml" }, { venue: "Medium", date: "2018-02-16", url: "https://vidyasagarmsc.medium.com/anomaly-detection-in-mobile-sensor-data-48ef62d0f7fc" }], summary: "This blog post is an excerpt from our solution tutorial – “Gather, visualize, and analyze IoT data“. The tutorial walks you through setting up an IoT…" },
    { id: 1145, title: "Infrastructure as code with Terraform on Windows", platform: "VMacWrites", platforms: ["VMacWrites", "Medium"], year: 2018, date: "2018-02-01", topics: ["Cloud", "Open Source", "DevOps"], url: "https://vmacwrites.wordpress.com/2018/02/01/infrastructure-as-code-with-terraform-on-windows/", alsoPublished: [{ venue: "Medium", date: "2018-01-30", url: "https://vidyasagarmsc.medium.com/infrastructure-as-code-with-terraform-on-windows-os-831ef8c975fa" }], summary: "This blog post is a quick guide on how to setup Terraform and IBM Cloud Provider on Windows operating system. First of all, What is Terraform? Terraform…" },
    { id: 1146, title: "Quickly scaffold an iOS-Swift or Android app with Push and Analytics", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2018, date: "2018-01-10", topics: ["Cloud", "Open Source", "Observability"], url: "https://vmacwrites.wordpress.com/2018/01/10/quickly-scaffold-an-ios-swift-or-android-app-with-push-and-analytics/", summary: "As mobile app developers, few of the many priorities in our bucket are engaging the users through Push Notifications and monitor the app usage through…" },
    { id: 1147, title: "For faster Swift Serverless actions", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2018, date: "2018-01-10", topics: ["Cloud", "AI", "Open Source"], url: "https://vmacwrites.wordpress.com/2018/01/10/for-a-faster-swift-serverless-actions/", alsoPublished: [{ venue: "DZone Legacy", date: "2018-01-08", views: "3,995", likes: 7 }, { venue: "Medium", date: "2018-01-09", url: "https://vidyasagarmsc.medium.com/for-performant-serverless-swift-actions-b11fa50eeb8f" }], summary: "While coding and drafting “Mobile app with a Serverless Backend”, We came up with an idea to use Swift on the server-side for the iOS app (it’s an…" },
    { id: 1148, title: "My High Sierra Story", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-11-28", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2017/11/28/my-high-sierra-story/", summary: "Disclaimer: This post is just to help macOS users who are facing installation failures or stuck while installing/upgrading to High Sierra. On a high note…" },
    { id: 1322, title: "Personifying Chatbots: A Guide to Realistic Conversation", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2017, date: "2017-11-05", topics: ["AI"], views: "5,233", likes: 6, legacy: true, removedFromDZone: true, archived: false, summary: "If you want your chatbot to pass the Turing Test, it needs to be personified and personalized. Luckily, that's not *too* difficult to do!" },
    { id: 1149, title: "Enhance your chatbot conversation", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-11-02", topics: ["Cloud", "AI"], url: "https://vmacwrites.wordpress.com/2017/11/02/enhance-your-chatbot-conversation/", summary: "Imagine, you are in a conversation with a chatbot and you feel that the human angle is completely missing because the bot starts it's dialog with a usual…" },
    { id: 1405, title: "This is how you personify and make your chatbot conversation stateful", platform: "Medium", platforms: ["Medium", "Chatbots Life"], year: 2017, date: "2017-11-01", topics: ["Cloud", "AI"], url: "https://vidyasagarmsc.medium.com/this-is-how-you-personify-and-make-your-chatbot-conversation-stateful-77d32894fb4c", alsoPublished: [{ venue: "Chatbots Life", date: "2017-11-01", url: "https://blog.chatbotslife.com/this-is-how-you-personify-and-make-your-chatbot-conversation-stateful-77d32894fb4c" }], summary: "Imagine, you are in a conversation with a chatbot and you feel that the human angle is completely missing because the bot ... starts it’s..." },
    { id: 1150, title: "Generate a Mobile Foundation adapter from the OpenAPI specification", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-10-04", topics: ["Cloud", "Open Source", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2017/10/04/generate-a-mobile-foundation-adapter-from-the-openapi-specification/", summary: "By reading the title, if you are wondering how to model an OpenAPI Specification, Read our previous blog post – Modelling OpenAPI – Swagger 2.0…" },
    { id: 1151, title: "An AI Powered modern Portfolio Manager", platform: "VMacWrites", platforms: ["VMacWrites", "Medium"], year: 2017, date: "2017-10-04", topics: ["Cloud", "AI", "Open Source"], url: "https://vmacwrites.wordpress.com/2017/10/04/ai-powered-modern-portfolio-manager-explained/", alsoPublished: [{ venue: "Medium", date: "2017-09-27", url: "https://vidyasagarmsc.medium.com/modern-portfolio-manager-explained-d43fe341133a" }], summary: "Finance Trade is a Node.js application that uses IBM Financial services and Watson services. The application is a modern portfolio manager that provides…" },
    { id: 1406, title: "When AI guides your Investment", platform: "Medium", platforms: ["Medium"], year: 2017, date: "2017-08-25", topics: ["Cloud"], url: "https://vidyasagarmsc.medium.com/when-ai-guides-your-investment-7ed0cad0592", summary: "“What would happen to my stock portfolio if the Dollar drops 5% against the Euro? or if the gold price goes up by 1.1%?” If you are ... a..." },
    { id: 1152, title: "OpenAPI (Swagger 2.0) YAML Generation Using API Connect", platform: "DZone", platforms: ["DZone", "VMacWrites", "Medium"], year: 2017, date: "2017-08-24", topics: ["Data Science", "Cloud"], url: "https://dzone.com/articles/openapi-swagger-20-yaml-generation-using-api-conne", alsoPublished: [{ venue: "Medium", date: "2017-08-24", url: "https://vidyasagarmsc.medium.com/openapi-specification-yaml-with-api-connect-fccf4386882c" }], also: {"VMacWrites": "https://vmacwrites.wordpress.com/2017/08/24/openapi-swagger-2-0-yaml-generation-using-api-connect/"}, views: "15.7K", summary: "Learn how to model and generate an OpenAPI specification using API Connect on IBM Cloud, and publish an API that talks to a NoSQL database." },
    { id: 1153, title: "DeveloperConnect: from containers to Serverless computing", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2017, date: "2017-07-01", topics: ["Cloud", "Containers"], url: "https://vmacwrites.wordpress.com/2017/07/01/developerconnect-containers-serverless-computing/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-07-13", views: "2,577", likes: 4 }], summary: "From Mumbai to Hyderbad to Bangalore From Container Orchestration to Serverless Computing From IBM Container service to IBM Bluemix Openwhisk From…" },
    { id: 1324, title: "Kubernetes From IBM Bluemix Container Service", platform: "DZone Legacy", platforms: ["DZone Legacy", "Medium"], year: 2017, date: "2017-06-21", topics: ["Kubernetes", "Containers", "DevOps"], url: "https://vidyasagarmsc.medium.com/kubernetes-on-ibm-cloud-b3a2a662c1f1", views: "4,403", likes: 4, legacy: true, removedFromDZone: true, archived: false, summary: "Learn to set up clusters using Kubernetes on IBM Bluemix, expose services, and manage the logs with the following steps." },
    { id: 1154, title: "Getting started with Kubernetes on IBM Cloud : The CLI Way", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-06-01", topics: ["Cloud", "Kubernetes", "Containers"], url: "https://vmacwrites.wordpress.com/2017/06/01/kubernetes-on-ibm-bluemix/", summary: "This blog post helps you in getting started with Kubernetes on IBM Cloud via CLI. After a post on how to get started with Docker Containers on IBM Cloud…" },
    { id: 1155, title: "Who's speaking? : Speaker Recognition with Watson Speech-to-Text API", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2017, date: "2017-05-18", topics: ["Cloud", "AI", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2017/05/18/whos-speaking-speaker-diarization-with-watson-speech-to-text-api/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-05-20", views: "8,889", likes: 6 }], summary: "Watson’s Cognitive Speech To Text API has been enhanced to support real-time speaker diarization; distinguishing between speakers in a conversation." },
    { id: 1326, title: "Taking a Patterns-First Approach With Bluemix [Presentation]", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2017, date: "2017-05-09", topics: ["Cloud", "Developer Advocacy"], views: "2,518", likes: 3, legacy: true, removedFromDZone: true, archived: false, summary: "The Bluemix Developer Console allows devs to pick their purpose first, then start off straight away with the right tools and service integrations." },
    { id: 1156, title: "Generate boilerplate code with IBM Cloud Developer Console", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-05-05", topics: ["Cloud", "Open Source"], url: "https://vmacwrites.wordpress.com/2017/05/05/patterns-first-with-bluemix-developer-console/", summary: "This post introduces you to Bluemix Developer Console; Patterns-first approach. Also, a quick and short intro to cloud native.This was presented at Great…" },
    { id: 1157, title: "Who's Speaking?: Speaker Diarization with Watson", platform: "Featured", platforms: ["Featured", "Medium"], year: 2017, date: "2017-05", topics: ["AI", "NLP", "Cloud"], url: "https://vidyasagarmsc.medium.com/track-whos-speaking-with-speaker-diarization-2e3eac2de2c3", summary: "Implementing speaker diarization using IBM Watson Speech-to-Text API.", isFeatured: true, citations: 3 },
    { id: 1328, title: "Getting Containerized via the Bluemix CLI", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2017, date: "2017-04-23", topics: ["Kubernetes", "Containers", "DevOps"], views: "5,241", likes: 3, legacy: true, removedFromDZone: true, archived: false, summary: "Bluemix recently upped its Kubernetes support, but they haven't forgotten about Docker. If you like CLIs, you'll want to check out IBM Containers." },
    { id: 1158, title: "Watson Service Chaining via OpenWhisk Sequence : Part 3 of 3", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2017, date: "2017-04-19", topics: ["Cloud", "AI", "Open Source"], url: "https://vmacwrites.wordpress.com/2017/04/19/watson-service-chaining-via-openwhisk-sequence-part-3-3/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-04-24", views: "3,324", likes: 4 }], summary: "By now (after reading Part 1 and Part 2 in this series), you should be aware of what OpenWhisk is and leverage OpenWhisk Sequence to chain Watson…" },
    { id: 1159, title: "Watson Service Chaining via Cloud Functions Sequence : Part 2 of 3", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2017, date: "2017-04-14", topics: ["Cloud", "AI"], url: "https://vmacwrites.wordpress.com/2017/04/14/watson-service-chaining-via-openwhisk-sequence-part-2-3/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-04-19", views: "2,863", likes: 3 }], summary: "In Part 1 of this series, you learnt the basics of Serverless computing and the building blocks behind Cloud Functions. In this post, you will create…" },
    { id: 1160, title: "Get CONTAINER-ized via IBM Cloud CLI", platform: "VMacWrites", platforms: ["VMacWrites", "Medium"], year: 2017, date: "2017-04-12", topics: ["Cloud", "Open Source", "Containers"], url: "https://vmacwrites.wordpress.com/2017/04/12/creating-a-docker-container-on-bluemix/", alsoPublished: [{ venue: "Medium", date: "2017-04-12", url: "https://vidyasagarmsc.medium.com/get-docker-ized-on-bluemix-de54844d1310" }], summary: "In this post, you will learn how to create and push a docker container to IBM Cloud via CLI. The post includes Steps to setup and use IBM Cloud CLI.…" },
    { id: 1161, title: "Watson Service Chaining via OpenWhisk Sequence : Part 1 of 3", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2017, date: "2017-04-06", topics: ["Cloud", "AI"], url: "https://vmacwrites.wordpress.com/2017/04/06/watson-service-chaining-via-openwhisk-sequence-part-1-of-3/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-04-17", views: "4,353", likes: 5 }], summary: "This 3-part series of posts helps you understand the in-depth features of Serverless Computing via OpenWhisk. OpenWhisk offers an easy way to chain…" },
    { id: 1332, title: "Adding Watson Speech-to-Text to Your Android App", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2017, date: "2017-03-30", topics: ["AI", "Data Science", "Developer Advocacy"], views: "4,173", likes: 3, legacy: true, removedFromDZone: true, archived: false, summary: "In this post, you will learn how to create an Android application that can convert speech to text for further processing using Watson machine learning." },
    { id: 1162, title: "What can you Build using your Bluemix Cloud platform trial", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-03-27", topics: ["Cloud"], url: "https://vmacwrites.wordpress.com/2017/03/27/build-using-bluemix-trial/", summary: "This post helps you understand Bluemix Cloud platform and what you can develop using Bluemix trial account. If you are new to Bluemix and want to learn…" },
    { id: 1407, title: "This is how Watson understands your Speech", platform: "Medium", platforms: ["Medium"], year: 2017, date: "2017-03-13", topics: ["Cloud", "AI", "Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/this-is-how-watson-understands-your-speech-f3be72f94aa4", summary: "This post is about injecting Watson Speech-to-Text into an Android native app. Speech-to-Text is available as a service on IBM Cloud i.e..." },
    { id: 1163, title: "Adding Watson Speech-to-Text to your Android App", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2017, date: "2017-03-06", topics: ["Cloud", "AI", "Open Source"], url: "https://vmacwrites.wordpress.com/2017/03/06/adding-watson-speech-to-text-to-your-android-app/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-03-07", views: "10,183", likes: 4 }, { venue: "Medium", date: "2017-02-22", url: "https://vidyasagarmsc.medium.com/add-watson-text-to-speech-to-your-android-app-in-simple-steps-7bc033b68c67" }], summary: "This post is about injecting Watson Speech-to-Text into an Android native app. Speech-to-Text is available as a service on IBM Cloud i.e.., Bluemix. You…" },
    { id: 1164, title: "OpenWhisk: A Serverless platform to create and run event-driven apps that scale on demand", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2017, date: "2017-03-02", topics: ["Cloud", "Open Source", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2017/03/02/go-serverless-with-openwhisk/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-03-15", views: "3,596", likes: 4 }, { venue: "Medium", date: "2017-03-06", url: "https://vidyasagarmsc.medium.com/openwhisk-create-and-run-event-driven-apps-that-scale-on-demand-bd8ca52134de" }], summary: "This blog post introduces you to Serverless computing, OpenWhisk (a serverless, open source cloud platform that executes functions in response to events…" },
    { id: 1165, title: "Integrating Watson Text to Speech into an Android Native App", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2017, date: "2017-02-22", topics: ["Cloud", "AI", "Open Source"], url: "https://vmacwrites.wordpress.com/2017/02/22/integrating-watson-text-speech-android-native-app/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-02-23", views: "6,420", likes: 6 }], summary: "Listen to your text in the form of speech with Watson Text-to-Speech service on Bluemix, and add this to your Android Native app." },
    { id: 1166, title: "Dialog a tete-a-tete with a bot via Watson", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-02-21", topics: ["Cloud", "AI", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2017/02/21/dialog-tete-tete-bot-via-watson-fb-live-chat/", summary: "The main intention of this blog post is to share my first FB Live chat. It was for a technical conversation Dialog a tete-a-tete with a bot via Watson.…" },
    { id: 1167, title: "Need of Context in a chatbot conversation", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2017, date: "2017-01-23", topics: ["Cloud", "AI", "Open Source"], url: "https://vmacwrites.wordpress.com/2017/01/23/context-to-maintain-the-state-of-a-chatbot-conversation/", alsoPublished: [{ venue: "DZone Legacy", date: "2017-04-17", views: "4,691", likes: 3 }, { venue: "Medium", date: "2017-01-20", url: "https://vidyasagarmsc.medium.com/contextual-chatbot-conversations-558a8a65ebab" }], summary: "This blog post introduces the Importance of Context to maintain the state of a Conversation while building a bot more specifically a chatbot. A…" },
    { id: 1336, title: "Walking Through Bluemix [Videos]", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2017, date: "2017-01-15", topics: ["Cloud", "Developer Advocacy"], views: "3,935", likes: 2, legacy: true, removedFromDZone: true, archived: false, summary: "You can use IBM Bluemix's various cloud offerings to quickly build your apps. These videos explore how to get started with Bluemix while highlighting its ease of use." },
    { id: 1168, title: "From Idea to Application in minutes A Walkthrough", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2017, date: "2017-01-13", topics: ["Cloud", "Architecture"], url: "https://vmacwrites.wordpress.com/2017/01/13/a-walkthrough-of-bluemix-the-ibm-cloud/", summary: "Whether you are a developer with an enterprise or a startup or a student having an idea and want to quickly evaluate by prototyping, IBM Cloud is the way…" },
    { id: 1169, title: "A Voice-enabled ChatBot powered by IBM Watson in Mins", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2017, date: "2017-01-05", topics: ["Cloud", "AI", "Open Source"], url: "https://vmacwrites.wordpress.com/2017/01/05/an-android-chatbot-powered-by-ibm-watson/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-12-07", views: "7,368", likes: 7 }, { venue: "Medium", date: "2016-12-06", url: "https://vidyasagarmsc.medium.com/watbot-an-android-chatbot-powered-by-watson-97d1afcf55b1" }], summary: "WatBot is a Voice-enabled Android Native ChatBot built using Watson Assistant, Speech-to-Text and Text-to-Speech Services on IBM Cloud (open standards…" },
    { id: 1170, title: "A feedback app in minutes with Ionic and Cloudant", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy", "Medium"], year: 2016, date: "2016-12-07", topics: ["Cloud", "Open Source", "Data Science"], url: "https://vmacwrites.wordpress.com/2016/12/07/a-feedback-mobile-app-in-minutes-with-ionic-and-cloudant/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-12-23", views: "7,245", likes: 2 }, { venue: "Medium", date: "2016-12-07", url: "https://vidyasagarmsc.medium.com/a-feedback-app-in-minutes-with-ionic-and-cloudant-43c95a309f8d" }], summary: "An Ionic feedback app using Cloudant NoSQL service on IBM Bluemix. An easy to configure mobile app for receiving feedback at Meetups, Events etc., Ionic…" },
    { id: 1339, title: "Rapidly Design, Build, Secure, and Publish an App Using Bluemix", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2016, date: "2016-12-05", topics: ["Security", "Developer Advocacy", "Cloud"], views: "6,288", likes: 3, legacy: true, removedFromDZone: true, archived: false, summary: "This blog post gives you an intro to an Enhanced Bluemix Mobile Dashboard. It even has an awesome video to help you out!" },
    { id: 1171, title: "App from Design to Store in 15 Mins via Bluemix Mobile Dashboard", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2016, date: "2016-11-23", topics: ["Cloud", "Open Source", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2016/11/23/an-enhanced-bluemix-mobile-dashboard/", summary: "This blog post gives you an intro to an Enhanced Bluemix Mobile Dashboard. This is version 2.0 of my previous blog post on how to Quickly Design, Build…" },
    { id: 1172, title: "Swift 3.0 explained for C# Developers", platform: "VMacWrites", platforms: ["VMacWrites", "Medium"], year: 2016, date: "2016-10-01", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2016/10/01/swift-language-for-csharp-developers/", alsoPublished: [{ venue: "Medium", date: "2016-12-06", url: "https://vidyasagarmsc.medium.com/swift-3-0-explained-for-c-developers-d4524d57d294" }], summary: "Originally posted on February 02, 2016 | Modified to Swift 3.0 on October 01, 2016 Programming languages provide a way to communicate with a computer…" },
    { id: 1173, title: "MobileFirst Cordova app development using Eclipse", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2016, date: "2016-09-12", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2016/09/12/mobilefirst-apps-using-eclipse/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-09-15", views: "4,162", likes: 7 }], summary: "Talking to developers is always a refreshing experience.Recently, I was fortunate enough to present and interact at Eclipse Summit 2016. The talk was on…" },
    { id: 1174, title: "Xamarin.iOS Binding for an Existing iOS Library with Objective Sharpie", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2016, date: "2016-09-01", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2016/09/01/xamarin-ios-binding-for-an-existing-ios-library-with-objective-sharpie/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-08-08", views: "4,881", likes: 3 }], summary: "These days a new phase has crept into my developer life and I call it generating Xamarin.iOS binding for Objective-C libraries. After tasting success by…" },
    { id: 1175, title: "Quickly Design, Build, Secure, and Deliver an app using Bluemix Mobile Services", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2016, date: "2016-08-22", topics: ["Cloud", "Open Source", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2016/08/22/quickly-design-build-secure-and-deliver-using-bluemix-mobile-services/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-08-28", views: "5,733", likes: 3 }], summary: "This blog post guides you on how to Design, Build, Secure Deliver a mobile app using Bluemix Mobile Services. As mobile app developers (Experienced or…" },
    { id: 1342, title: "IBM Cloud Tools for Swift", platform: "DZone Legacy", platforms: ["DZone Legacy"], year: 2016, date: "2016-08-18", topics: ["Developer Advocacy", "Cloud"], views: "6,653", likes: 4, legacy: true, removedFromDZone: true, archived: false, summary: "Swift as a programming language is now available on Linux and that means we as developers can use it on servers in data centers and in cloud. Check out some of these awesome IBM cloud tools that you should be using." },
    { id: 1343, title: "Generate Xcode Project via Swift Package Manager", platform: "DZone Legacy", platforms: ["DZone Legacy", "Medium"], year: 2016, date: "2016-08-17", topics: ["Developer Advocacy"], url: "https://vidyasagarmsc.medium.com/generate-xcode-project-via-swift-package-manager-8caca317e0cd", views: "3,346", likes: 3, legacy: true, removedFromDZone: true, archived: false, summary: "Vidyasagar Machupalli didn't know how to generate an Xcode project via Swift package manager, so he figured it out and wrote a tutorial for you to learn too!" },
    { id: 1176, title: "Generate Xcode Project via Swift Package Manager", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2016, date: "2016-07-12", topics: ["Open Source", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2016/07/12/generating-xcode-project-using-swift-package-manager/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-07-15", views: "3,890", likes: 3 }], summary: "As part of my journey with Swift, I was watching this WWDC 2016 video Going Server-side with Swift Open Source and may be at 31:36 of the video my…" },
    { id: 1177, title: "Xamarin C# binding of a Cocoapods iOS SDK using Sharpie", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2016, date: "2016-06-30", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2016/06/30/xamarin-c-binding-of-a-cocoapods-ios-sdk-using-sharpie/", summary: "After my endeavor with Xamarin.Android Bindings and Xamarin Apps with IBM MobileFirst, I received an interesting requirement from my colleague Chethan. He…" },
    { id: 1178, title: "IBM Cloud Tools for Swift", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2016, date: "2016-06-24", topics: ["Cloud", "Open Source"], url: "https://vmacwrites.wordpress.com/2016/06/24/ibm-cloud-tools-swift/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-06-25", views: "8,039", likes: 3 }], summary: "Swift as a programming language is now available on Linux and that means we as developers can use it on servers in data centers and in cloud. For…" },
    { id: 1179, title: "Securely Connect to Cloudant Service From Node.JS With IBM Bluemix", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2016, date: "2016-05-26", topics: ["Cloud", "Open Source", "Data Science"], url: "https://vmacwrites.wordpress.com/2016/05/26/connect-to-your-cloudant-service-from-nodejs-securely-using-ibm-bluemix/", summary: "IBM Cloudant is a NoSQL JSON document store that’s optimized for handling heavy workloads of concurrent reads and writes in the cloud; a workload that is…" },
    { id: 1180, title: "Swift on IBM Bluemix", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2016, date: "2016-04-24", topics: ["Cloud", "Open Source", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2016/04/24/swift-ibm-bluemix/", summary: "IBM brings Swift to the cloud IBM Bluemix. After my recent blog post Swift for C# Developers, I was fortunate to deliver a bunch of sessions including IBM…" },
    { id: 1181, title: "Swift for C# Developers", platform: "DZone", platforms: ["DZone", "DZone Legacy"], year: 2016, date: "2016-03-01", topics: ["Developer Advocacy"], url: "https://dzone.com/articles/swift-for-c-developers", alsoPublished: [{ venue: "DZone Legacy", date: "2016-03-02", views: "5,351", likes: 7 }], views: "10.0K", summary: "Swift and C# are both high-level programming languages, with shared features, such as being compiled programming languages. Here's a look at Swift from…" },
    { id: 1182, title: "Ionic Hybrid Mobile app using MobileFirst Platform 7.1 CLI", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2015, date: "2015-12-30", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2015/12/30/ionic-hybrid-mobile-app-using-mobilefirst-platform-7-1-cli/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-01-08", views: "5,864", likes: 5 }], summary: "Mobile apps are everywhere and on everyone's learning list. As a web developer, You can leverage your HTML5, Javascript, CSS and other web development…" },
    { id: 1183, title: "Integrating Xamarin apps with IBM MobileFirst Platform", platform: "VMacWrites", platforms: ["VMacWrites", "DZone Legacy"], year: 2015, date: "2015-12-19", topics: ["Open Source", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2015/12/19/integrating-xamarin-apps-with-ibm-mobilefirst-platform/", alsoPublished: [{ venue: "DZone Legacy", date: "2016-01-02", views: "5,085", likes: 5 }], summary: "This blog is all about integrating Xamarin apps with IBM MobileFirst Platform (MFP in short). If you observe the post title it talks about two important…" },
    { id: 1184, title: "Importing MobileFirst Platform Cordova project into Visual Studio 2015", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-10-02", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2015/10/02/importing-mobilefirst-cordova-project-into-visual-studio-2015/", summary: "Exploring and Coding are part of every developer's life. While exploring you may come across many technologies, tools , libraries etc. Each technology has…" },
    { id: 1185, title: "Integrating MobileFirst Quality Assurance into Xamarin.Android app", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-09-01", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2015/09/01/integrating-mobilefirst-quality-assurance-into-xamarin-android-app/", summary: "It all started when I received an email seeking help on using MQA or to be more precise integrating MQA into Xamarin based android app. Before jumping…" },
    { id: 1186, title: "Importing Visual studio Cordova project with Ionic and AngularJS into IBM MobileFirst", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-08-18", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2015/08/18/importing-visual-studio-cordova-project-with-ionic-and-angularjs-into-ibm-mobilefirst/", summary: "Let me start this post with a disclaimer that Don't panic by reading the post title. It might look bit lengthy, but still summarises what we are trying to…" },
    { id: 1187, title: "Visual Studio : What's new in 2015 debugging", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-02-28", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2015/02/28/whats-new-in-visual-studio-2015-debugging/", summary: "Microsoft Visual studio as an IDE has matured over the years and now as a developer we are eagerly awaiting release of Visual Studio 2015 later this year.…" },
    { id: 1188, title: "BDotNet: Valentine with AngularJS", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-02-15", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2015/02/15/bdotnet-valentine-with-angularjs/", summary: "On Feb 14th,I had an opportunity to speak about AngularJS the most happening MVW/MV* javascript framework by Google at Microsoft. I started by introducing…" },
    { id: 1189, title: "Reboot : DocumentDB NoSQL on cloud", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-01-31", topics: ["Open Source", "Data Science", "Cloud"], url: "https://vmacwrites.wordpress.com/2015/01/31/reboot-documentdb-nosql-on-cloud/", summary: "Today,I was given an opportunity to speak about DocumentDB A NoSQL Database on cloud (Azure) at Reboot 2015. NoSQL has become a buzz word in the DB world…" },
    { id: 1190, title: "Level Up Ep.03 : 7 truths about indie game development", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-01-29", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2015/01/29/level-up-ep-03-7-truths-about-indie-game-development/", summary: "//channel9.msdn.com/Shows/Level-Up/Episode-3-Magma-Mobiles-Nicolas-Sorel-CEO-and-Founder/player Level Up is a show devoted to game development. Each show…" },
    { id: 1191, title: "Reboot : Come ONLINE", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-01-20", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2015/01/20/reboot-come-online/", summary: "Ok!!! Interesting Post Title.Can you answer few of my questions Sure What is this Reboot ? Ans : Let me answer your questions through images Cool!!! Where…" },
    { id: 1192, title: "Xbox : Project Spark A gameground", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2015, date: "2015-01-07", topics: ["Open Source", "Data Science"], url: "https://vmacwrites.wordpress.com/2015/01/07/xbox-project-spark-a-gameground/", summary: "To simply introduce, Project Spark is developed by team dakota and skybox labs.It is published by Microsoft Studios.It is a game maker Where Players…" },
    { id: 1194, title: "Gaming : Anti-Aliasing Techniques", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-12-27", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/12/27/gaming-anti-aliasing-techniques/", summary: "Recently,I was learning CocosSharp.It is a game engine which provides technology for making cross-platform games. As soon as you hit the first line of…" },
    { id: 1195, title: "GameHack Chat with Vidyasagar, Microsoft MVP (Gaming)", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-12-22", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/12/22/gamehack-chat-with-vidyasagar-microsoft-mvp-gaming/", summary: "Chit-Chat with Shrey from Gaming Central on Gaming in India at Game Hack Launch by Reliance Games in association with Intel , Gaming Central etc" },
    { id: 1196, title: "Talk : Best Practices in Game Development", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-12-21", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/12/21/talk-best-practices-in-game-development/", summary: "This December 14th, I was invited to present and talk on Best practices in Game Development at VideoGameFest by Dumadu Games. Here's the Invite mailed to…" },
    { id: 1197, title: "Functional Vs Imperative language paradigms", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-12-17", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/12/17/functional-vs-imperative-language-paradigms/", summary: "These days, i am in deep love with Microsoft's F# language and Apple's Swift language.F# on one side has picked the good parts from Functional languages…" },
    { id: 1198, title: "LEVEL UP Ep .02 Habitat’s Charles Cox, Founder of 4gency", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-12-12", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/12/12/level-up-ep-02-habitats-charles-cox-founder-of-4gency/", summary: "//channel9.msdn.com/Shows/Level-Up/Episode-2-Habitats-Charles-Cox-Founder-of-4gency/player Level Up is a show devoted to game development. Each show will…" },
    { id: 1199, title: "HTML5,Javascript : Game engines and tools", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-12-03", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/12/03/html5javascript-game-engines-and-tools/", summary: "HTML5 game engines The following are few examples of game engines implemented with HTML5 and JavaScript: Construct 2: One of the first WebGL enabled HTML5…" },
    { id: 1200, title: "C#,Web API : HTTP GET with a request body", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-12-02", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/12/02/http-get-with-a-request-body/", summary: "Introduction : This is impossible !!!! . GET verb can take request parameters only from the query strings (name/value pairs) and it has a limitation in…" },
    { id: 1201, title: "Unity 4.6 UI", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-26", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/11/26/unity-4-6-ui/", summary: "The new UI system is leaps ahead of the the old, it’s easy it is to build what you want and do it quickly with little or no coding necessary. Get all this…" },
    { id: 1202, title: "LEVEL UP -Project Spark Ep.01", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-26", topics: ["Data Science", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/11/26/level-up-project-spark-ep-01/", summary: "I am privileged to have my blog post referred in this Link to Actual Post Level Up is a show devoted to game development. Each show will recap current…" },
    { id: 1203, title: "Implementing the Ad Mediation in unity 3d Windows Phone 8/8.1 Games (silver light runtime)", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-25", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/11/25/implementing-the-ad-mediation-in-unity-3d-windows-phone-88-1-games-silver-light-runtime/", summary: "Originally posted on Unity coding with Microsoft platform services: Ad Mediation in unity 3D Windows Phone 8/8.1 Games or Apps The Ad Mediator aims to…" },
    { id: 1204, title: "C#,F# What’s New in Visual Studio 2015 Preview", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-18", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/11/18/cf-whats-new-in-visual-studio-2015-preview/", summary: "What's New In C# 6.0 C# 6.0 adds about a dozen bite-sized new features to C#, all aimed at making your code cleaner and clearer. Instead of introducing…" },
    { id: 1205, title: "Gaming : GameDev Terms to be aware of", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-16", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/11/16/gaming-gamedev-terms-to-be-aware-of-2/", summary: "See examples of how these key terms are used and why they’re so important for your assets and games. If you ever encounter a term used in game development…" },
    { id: 1206, title: "Never ending love for Game' A moment to cherish", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-08", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/12/18/never-ending-love-for-game-a-moment-to-cherish-2/", summary: "It all started a year and half ago. These were the words which i spoke yesterday at TechEdIndia 2014. But my gaming life started at Microsoft DevCamps…" },
    { id: 1207, title: "Gaming , C# : Come..Fall in Love with CocosSharp", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-08", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/11/08/come-fall-in-love-with-cocossharp/", summary: "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete. -Richard…" },
    { id: 1208, title: "As a GameDev,what to expect from #techedIndia ?", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-11-03", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/11/03/as-a-gamedevwhat-to-expect-from-techedindia/", summary: "The most expected and the much awaited Microsoft TechEdIndia 2014 is just around the corner and as a game developer or indie developer what should i…" },
    { id: 1209, title: "Gaming : Audio ,Source Control and Project Management free tools", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-10-18", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/10/18/audio-source-control-and-project-management-free-tools/", summary: "Audio While there are plenty of free tools for development and art, for whatever reason I've always found it hardest to find good free audio tools. Here…" },
    { id: 1210, title: "GAMING : THE BEST FREE ART AND GRAPHICS DESIGN TOOLS", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-09-30", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/09/30/the-best-free-art-and-graphics-design-tools/", summary: "FREE Assets to start your game It is the greatest of all mistakes to do nothing because you can do only a little. Do what you can. Sydney Smith…" },
    { id: 1211, title: "Gaming : The Best Free Tools To start your game Development", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-09-15", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/09/15/the-best-free-tools-to-start-your-game-development/", summary: "“Who needs sports stardom when you can shoot fireballs from your fingertips?” ― Ethan Gilsdorf MonoGame monogame.net MonoGame is a C# framework that…" },
    { id: 1212, title: "Gaming : Windows Universal Apps with Unity", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-08-17", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/08/17/windows-universal-apps-with-unity/", summary: "We are pleased to announce the full support for Windows Phone 8.1 and Universal Windows Applications with the release of Unity 4.5.3. -Unity3d What are…" },
    { id: 1213, title: "Unity and C# : Performance Optimisation tips", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-08-03", topics: ["Open Source", "Mathematics"], url: "https://vmacwrites.wordpress.com/2014/08/03/performance-optimization-tips/", summary: "“Premature optimization is the root of all evil.” ― Donald Ervin Knuth, Art of Computer Programming, Volume 1: Fundamental Algorithms Optimization is a…" },
    { id: 1214, title: "Gaming : Developer to Game Developer A transition", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-07-19", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/07/19/gaming-developer-to-game-developer-a-transition/", summary: "“Never too old, never too bad, never too late, never too sick to start from scratch once again.”~ Bikram Choudhury When i introduce myself i say I am a…" },
    { id: 1215, title: "MOOC : Learn gaming interactively", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-07-07", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/07/07/mooc-concepts-in-game-development-gamesdev/", summary: "A Massive Open Online Course(MOOC) is an online course aimed at unlimited participation and open access via the web. This MOOC ,sponsored by Open2Study…" },
    { id: 1216, title: "Gaming : Kinect for Windows V2", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-07-04", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/07/04/gaming-kinect-for-windows-v2/", summary: "Kinect for Windows gives computers eyes, ears, and a brain. With Kinect for Windows, businesses and developers are creating applications that allow their…" },
    { id: 1217, title: "Gaming : Free Assets to start your game development today", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-06-24", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/06/24/gaming-free-assets-to-start/", summary: "“If you try and lose then it isn't your fault. But if you don't try and we lose, then it's all your fault.” ― Orson Scott Card, Ender's Game To start a…" },
    { id: 1218, title: "Unity : Porting labs Takeaways", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-06-08", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/06/08/unity-porting-labs-takeaways/", summary: "On May 28th of this year,I was fortunate and privileged to attend Unity3d Porting Labs held at Microsoft India,Signature building,Bangalore.This was an…" },
    { id: 1219, title: "Gaming : Build and publish in just 5 Minutes", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-05-21", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/05/21/gaming-build-and-publish-in-just-5-minutes/", summary: "People say being game developer is like walking on a desert with bare foot on a bright sunny day. As a n00b,even i felt the same. Times have…" },
    { id: 1220, title: "Unity and C#: Game Loop (Awake,Start,Update)", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-04-19", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/04/19/unity-game-loop/", summary: "Introduction The central component of any game, from a programming standpoint, is the game loop. It allows the game to run smoothly regardless of a user's…" },
    { id: 1221, title: "Gaming : 2D Game Engines", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-04-10", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/04/10/gaming-2d-game-engines-2/", summary: "I have decided to learn,develop and market a Game.Cool!!! but which game engine/framework should i go with ? What are the pros and cons of existing Game…" },
    { id: 1222, title: "Unity and C# : Learn Scripting", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-04-07", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/04/07/unity-and-c-learn-scripting-2/", summary: "Scripting is an essential ingredient in all games. Even the simplest game will need scripts to respond to input from the player and arrange for events in…" },
    { id: 1223, title: "Windows : xRDP to CentOS 6.5", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-03-28", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/03/28/windows-xrdp-to-centos-6-5/", summary: "After a successful RDP to Ubuntu.Our next challenge was to RDP to CentOS 6.5. Frankly speaking,this wasn't as easy as ubuntu. We will use the same Putty…" },
    { id: 1224, title: "Windows :xRDP to Ubuntu", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-03-17", topics: ["Data Science", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/03/17/windows-xrdp-to-ubuntu/", summary: "In my technical journey, my next goal is to master BIG DATA and NoSQL. With the support of my manager and a colleague, we received 5 Linux Virtual…" },
    { id: 1225, title: "Unity,Android : Porting your unity game for testing", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-02-24", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/02/24/unityandroid-porting-your-unity-game-for-testing-2/", summary: "After a successful game release to Windows store ,I wanted to try with mobile platforms.I thought why can't i port the same game (Bongo Soccer-200…" },
    { id: 1226, title: "API : Talk to Twitter API Via C#-part 1", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-02-18", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/02/18/api-talk-to-twitter-api-via-c1/", summary: "I have involved myself in learning and exploring twitter API (More specific REST API V1.1).One very good day, i thought why should i always use the…" },
    { id: 1227, title: "Unity: Learn 2D Game Development", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-01-31", topics: ["Open Source", "Data Science"], url: "https://vmacwrites.wordpress.com/2014/01/31/unity-learn-2d-game-development/", summary: "Unity is a 3D engine, right? Not quite – now it’s more. It comes with a dedicated and streamlined 2D workflow. With the release of 4.3,unity added the…" },
    { id: 1228, title: "Object Oriented (A) (D) (P)", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-01-26", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2014/01/26/object-oriented/", summary: "Object-Oriented Programming What then, is object-oriented programming (or OOP, as it is sometimes written)? We define it as follows: Object-oriented…" },
    { id: 1229, title: "Unity : Another dimension", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2014, date: "2014-01-11", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2014/01/11/unity-2d-introduction/", summary: "After my learning curve with unity3D,I started looking into the 2D worldThe first question in my mind was What is the best 2D Game Engine? I found the…" },
    { id: 1230, title: "My First Game : Start to Store", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2013, date: "2013-12-27", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2013/12/27/my-first-game-start-to-store/", summary: "It all started two months ago.. My ease for learning something new pushed me to start looking into Unity3D,One stop game engine with a motto of Develop…" },
    { id: 1231, title: "Unity : Animate your character using Mecanim", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2013, date: "2013-12-26", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2013/12/26/unity-animate-your-character-using-mecanim/", summary: "In the Legacy animation system(Before unity 4.0),we used to manually write code to control the animation.We were either using a animation.CrossFade(); or…" },
    { id: 1232, title: "Touch-ups before publishing your Unity game to Windows store", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2013, date: "2013-12-24", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2013/12/24/touch-ups-before-publishing-your-unity-game-to-windows-store/", summary: "Two days ago, i have published my first game to windows store and below are the steps which i followed before publishing the game.. I will continue where…" },
    { id: 1233, title: "Unity and C# :Memory Management and Garbage Collection", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2013, date: "2013-12-23", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2013/12/23/unity-and-c-memory-management-and-garbage-collection/", summary: "Memory management is the art and the process of coordinating and controlling the use of memory in a computer system. Memory management can be divided into…" },
    { id: 1234, title: "Windows : Adding privacy URL to charm settings", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2013, date: "2013-12-20", topics: ["Security"], url: "https://vmacwrites.wordpress.com/2013/12/20/windows-adding-privacy-url-to-charm-settings/", summary: "After more than a month of hardcore designing,coding,animating,testing etc., on my game(soccer),i thought its time to push it to Windows store. I have…" },
    { id: 1235, title: "Unity : What and How", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2013, date: "2013-12-14", topics: ["Open Source"], url: "https://vmacwrites.wordpress.com/2013/12/14/unity-what-and-how/", summary: "Unity is a game development ecosystem: a powerful rendering engine fully integrated with a complete set of intuitive tools and rapid workflows to create…" },
    { id: 1236, title: "Powershell-File cannot be loaded", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2013, date: "2013-06-27", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2013/06/27/powershell-file-cannot-be-loaded/", summary: "Recently,i have upgraded my office laptop to Windows 8.After my powershell ISE stopped responding in fact working on Windows 7. After few days i was…" },
    { id: 1237, title: "Talk to Facebook Graph API VIA FQL,C#", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2012, date: "2012-06-25", topics: ["Data Science"], url: "https://vmacwrites.wordpress.com/2012/06/25/talk-to-facebook-graph-api-via-fqlc/", summary: "This post is here to help you talk to Facebook's Graph API through FQL and save the JSON results to a Database VIA C#. FQL stands for Facebook Query…" },
    { id: 1238, title: "MEET THE NEW WINDOWS AZURE", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2012, date: "2012-06-14", topics: ["Cloud", "Data Science"], url: "https://vmacwrites.wordpress.com/2012/06/14/meet-the-new-windows-azure/", summary: "June 7th- It’s been a big week for Windows Azure If you missed the live stream, you can watch the recorded version online atmeetwindowsazure.com.…" },
    { id: 1239, title: "ASP.NET MVC4-what's in the basket???", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2012, date: "2012-05-30", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2012/05/30/asp-net-mvc4-whats-in-the-basket/", summary: "My boss has asked me to do a POC using MVCI jumped and said will try with MVC4-the new beta bride in the marketThen did a reality study and here are few…" },
    { id: 1240, title: "POWERSHELL-AzureManagementToolsSnapIn Not installed", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2012, date: "2012-04-04", topics: ["Cloud"], url: "https://vmacwrites.wordpress.com/2012/04/04/powershell-azuremanagementtoolssnapin-not-installed/", summary: "when i execute the below command in powershell , its giving me an error saying. Add-PSSnapin AzureManagementToolsSnapIn Add-PSSnapin : The Windows…" },
    { id: 1241, title: "WCF Questions", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2012, date: "2012-02-15", topics: ["Architecture"], url: "https://vmacwrites.wordpress.com/2012/02/15/wcf-questions/", summary: "One of my Friend,A Solution Architect has asked these Questions so that i can understand the in depth concepts of WCF.Let's find what the Questions are.…" },
    { id: 1242, title: "Attaching .MDF File Without .LDF file in SqlServer An Error-Fix Approach", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2012, date: "2012-01-31", topics: ["Data Science"], url: "https://vmacwrites.wordpress.com/2012/01/31/attach-mdf-file-without-ldf-an-error-fix-approach/", summary: "I was trying to attach a .MDF file without a .LDF which I downloaded from CodePlex using the query below USE [master] CREATE DATABASE Adventure ON…" },
    { id: 1243, title: "JQuery POST Request to WCF service in ASP.NET MVC", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2012, date: "2012-01-12", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2012/01/12/jquery-post-request-to-wcf-service-in-asp-net-mvc/", summary: "One of my colleagues was fighting hard to display a list returned by a WCF service in an ASP.NET MVC3 Razor View.I tried few things and it worked out…" },
    { id: 1244, title: "HYPER-V Manager Network Connection/adapter issue", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-12-01", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2011/12/01/hyper-v-manager-network-connectionadapter-issue/", summary: "Today, I have downloaded windows 8 and started configuring a new Virtual machine on Hyper-v manager.Unluckily,while configuring Network,the drop down…" },
    { id: 1245, title: "Remote Desktop: Error while trying to connect to VM ROLE", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-11-28", topics: ["Open Source", "Security"], url: "https://vmacwrites.wordpress.com/2011/11/28/remote-desktop-error-while-trying-to-connect-to-vm-role/", summary: "An authentication error has occurred. The Local Security Authority cannot be contacted SOLUTION :" },
    { id: 1246, title: "Error : CS 2001 and CS 2008", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-09-30", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2011/09/30/error-cs-2001-and-cs-2008/", summary: "Error: Unable to generate a temporary class (result=1). error CS2001: Source file ‘C:WINDOWSTEMPfilename.cs’ could not be found error CS2008: No inputs…" },
    { id: 1247, title: "AZURE VM ROLE Issue : Too many arguments'", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-09-26", topics: ["Cloud", "Open Source"], url: "https://vmacwrites.wordpress.com/2011/09/26/azure-vm-role-issue-too-many-arguments/", summary: "Alas!!! I started working on a Azure VM Role.There are so many hiccups and blockades while setting up the Azure VM Role (Which is still in Beta) I would…" },
    { id: 1248, title: "Building an Azure v1.4 Package file", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-06-20", topics: ["Cloud"], url: "https://vmacwrites.wordpress.com/2011/06/20/building-a-azure-v1-4-package-file/", summary: "I tried to push my ASP.NET website to Azure and faced too many issues as Windows Azure doesn't support Website. I was not able to build a V1.4 cspkg file…" },
    { id: 1249, title: "Make Agile Work for You in TFS 2010", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-06-02", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2011/06/02/make-agile-work-for-you-in-tfs-2010/", summary: "Courtesy: MSDN Magazine This is the story of one team’s road to Agile using Team Foundation Server (TFS) 2010. In the Agile Manifesto, there are several…" },
    { id: 1250, title: "New C# Features in the .NET Framework 4-Covariance and Contravariance", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-03-24", topics: ["Mathematics"], url: "https://vmacwrites.wordpress.com/2011/03/24/new-c-features-in-the-net-framework-4-covariance-and-contravariance/", summary: "Covariance and Contravariance Covariance and contravariance are best introduced with an example, and the best is in the framework. In…" },
    { id: 1251, title: "Dynamic and the DLR", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2011, date: "2011-03-24", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2011/03/24/dynamic-and-the-dlr/", summary: "Dynamic Dispatch On to the interop features in C# 4.0, starting with what is perhaps the biggest change. C# now supports dynamic late-binding. The…" },
    { id: 1252, title: "Difference between Data Encapsulation vs Abstraction", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-09-16", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2010/09/16/difference-between-data-encapsulation-vs-abstraction/", summary: "Encapsulation has two faces; data abstraction and information hiding. Data abstraction is a type seen from the outside. Information hiding is a type seen…" },
    { id: 1253, title: "Sharepoint 2010 Cannot connect to configuration database issue", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-08-27", topics: ["Data Science"], url: "https://vmacwrites.wordpress.com/2010/08/27/sharepoint-2010-cannot-connect-to-configuration-database-issue/", summary: "Sourabh has installed Sharepoint 2010 in his new (upgraded) machine and I started playing with that . After few days, i felt bored of using…" },
    { id: 1254, title: "Runtime Vs Compile time Errors in C#", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-08-05", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2010/08/05/runtime-vs-compile-time-errors-in-c/", summary: "The difference between compile time and run time is an example of what pointy-headed theorists call thephase distinction. It is one of the hardest…" },
    { id: 1255, title: "Covariance and Contravariance FAQ", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-05-28", topics: ["Mathematics"], url: "https://vmacwrites.wordpress.com/2010/05/28/covariance-and-contravariance-faq/", summary: "What are covariance and contravariance? In C#, covariance and contravariance enable implicit reference conversion for array types, delegate types, and…" },
    { id: 1256, title: "AFICIONADO's HEAVEN: Design Pattern Interview Questions in .NET | dotnetuncle.com", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-05-19", topics: ["Architecture"], url: "https://vmacwrites.wordpress.com/2010/05/19/aficionados-heaven-design-pattern-interview-questions-in-net-dotnetuncle-com/", summary: "AFICIONADO's HEAVEN: Design Pattern Interview Questions in .NET | dotnetuncle.com." },
    { id: 1257, title: "C# Programming Tools", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-05-18", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2010/05/18/c-programming-tools/", summary: "The C# Team has scoured the Web for other implementations of the CLI, cool object browsers, IDE tricks, add-ins, obfuscators, and other useful tools and…" },
    { id: 1258, title: "WINDOWS AZURE", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-04-28", topics: ["Cloud", "Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2010/04/28/windows-azure/", summary: "WCF, REST and URL Rewriting with Windows Azure! http://blogs.msdn.com/davidlem/archive/2010/04/26/wcf-rest-and-url-rewriting-with-windows-azure.aspx…" },
    { id: 1259, title: "Visual C# 2010 Samples", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-04-27", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2010/04/27/visual-c-2010-samples/", summary: "The Visual Studio 2010 RTM Samples are now live! Samples and documents for C# 4.0 can be found on the Downloads page. The CSharpDynamic samples include…" },
    { id: 1260, title: "Get Ready For C# 4.0!", platform: "VMacWrites", platforms: ["VMacWrites"], year: 2010, date: "2010-04-23", topics: ["Developer Advocacy"], url: "https://vmacwrites.wordpress.com/2010/04/23/csharp4-0/", summary: "Visual Studio 2010 is here! And of course this means that C# 4.0 is also here. Let’s do a quick review of the new language features added in this release.…" }
  ],
  // Speaking engagements, newest first.
  //
  // evidence is provenance, not presentation -- it is not rendered. It records
  // what backs each row so a future edit knows what to re-verify:
  //   recording  an organiser or publisher page names the session
  //   deck       a deck or recording exists naming the event
  //   self       the row rests on the author's own engagement list
  //
  // role is what was actually done. A panel is not a talk, moderating a Q&A is
  // not presenting, and a track owner owns the track rather than giving one
  // session. source is mandatory: every entry has a page a reader can open.
  talks: [
    {
      date: '2021-03-12', year: 2021, kind: 'Webinar',
      title: 'Chatbot Development for Enhancing Customer Experience',
      venue: 'ACM Chennai · IEEE CS Madras · CSI Chennai, with DELNET',
      role: 'Speaker, and moderator of the Q&A',
      detail: 'Recorded and published by DELNET.',
      url: 'https://www.youtube.com/watch?v=O2zkRZs-4sM',
      source: 'https://delnet.in/prog_pages/2021.php',
      evidence: 'recording'
    },
    {
      date: '2021', year: 2021, kind: 'Virtual conference',
      title: 'IBM Cloud Native Day',
      venue: 'IBM Cloud · IBM Community',
      role: 'Speaker',
      detail: 'Fifteen sessions on serverless, DevOps, Knative, containers and cloud native, with three keynotes and a cross-track panel.',
      url: 'https://events.bemyapp.com/cloudnativeday',
      source: 'https://events.bemyapp.com/cloudnativeday',
      evidence: 'recording'
    },
    {
      date: '2018-09-22', year: 2018, kind: 'Talk',
      title: 'Eclipse Day India 2018',
      venue: 'IBM India, Embassy Golf Links, Bangalore',
      role: 'Speaker',
      detail: 'A joint meetup of the Eclipse, Java and Polyglot language communities. No public programme names the session, so the deck is the record.',
      url: 'https://speakerdeck.com/vidyasagarmsc/eclipseday-2018',
      source: 'https://wiki.eclipse.org/Eclipse_Day',
      evidence: 'deck'
    },
    {
      date: '2017-10-27', year: 2017, kind: 'Panel',
      title: 'Panel Discussion on Serverless',
      venue: 'Serverless Summit India, Park Plaza, Bangalore',
      role: 'Panelist',
      detail: 'India’s first conference on serverless technologies. On the panel with John Willis and Sandeep Alur; moderated by Anand Gothe.',
      url: 'https://inserverless.konfhub.com/',
      source: 'https://inserverless.konfhub.com/',
      evidence: 'recording'
    },
    {
      date: '2017-09-16', year: 2017, kind: 'Meetup',
      title: 'BlueCoders: Master the art of data science · Watson Machine Learning',
      venue: '91SpringBoard, JP Nagar, Bangalore',
      role: 'Host and speaker — two sessions',
      detail: 'One of the earliest BlueCoders meetups, at the group’s own venue partner. Opened the session, then took the Machine Learning slot.',
      url: 'https://www.meetup.com/BlueCoders/events/243012293/',
      source: 'https://www.meetup.com/BlueCoders/events/243012293/',
      evidence: 'recording'
    },
    {
      date: '2017-09-02', year: 2017, kind: 'Talk',
      title: 'Stock portfolio analysis with Cloud Foundry and AI services',
      venue: 'Bangalore Cloud Foundry Day, SAP Labs India',
      role: 'Speaker — the first external speaker at the event',
      detail: 'Built a Cloud Foundry application from scratch and demoed a stock-portfolio analysis service consuming Bluemix platform services alongside IBM Watson AI services. 150+ attendees.',
      url: 'https://www.cloudfoundry.org/blog/cloud-foundry-day-sap-labs-bangalore/',
      source: 'https://www.cloudfoundry.org/blog/cloud-foundry-day-sap-labs-bangalore/',
      evidence: 'recording'
    },
    {
      date: '2017-07-29', year: 2017, kind: 'Talk',
      title: 'Deliver cloud apps with ease',
      venue: 'Eclipse Summit 2017, Bengaluru',
      role: 'Speaker — accepted talk, 20 minutes, beginner',
      detail: 'IBM Eclipse tools for Bluemix: content assist against hosted services, delivery through DevOps or the Orion web IDE, and deploying across cloud and on-premises. Ran 03:15–03:35 in the Brahmaputra hall, with Srihari Kulkarni.',
      url: 'https://confengine.com/conferences/eclipse-summit-2017/proposal/3898/deliver-cloud-apps-with-ease',
      source: 'https://confengine.com/user/vidyasagar-msc',
      evidence: 'recording'
    },
    {
      date: '2017-07-22', year: 2017, kind: 'Meetup',
      title: 'BlueCoders: Cognitive service chaining with Serverless Computing',
      venue: '91SpringBoard, Koramangala, Bangalore',
      role: 'Organiser and speaker — two sessions',
      detail: 'Ran the Watson Cognitive services and OpenWhisk sessions, then handed the room to Norton Stanley for the service-chaining hands-on lab.',
      url: 'https://www.meetup.com/BlueCoders/events/241194184/',
      source: 'https://www.meetup.com/BlueCoders/events/241194184/',
      evidence: 'recording'
    },
    {
      date: '2017-06-28', year: 2017, kind: 'Track',
      title: 'IBM DeveloperConnect Roadshow 2017 — Cloud track',
      venue: 'Mumbai 28 Jun · Hyderabad 29 Jun · Bangalore 1 Jul 2017',
      role: 'Track owner and speaker, at all three stops',
      detail: 'Two talks and a hands-on lab: “Love Kubernetes? Now, manage your containers with it on IBM Bluemix Container Service”, “Look Ma, No Server! Go Serverless with IBM Bluemix OpenWhisk”, and event-driven and serverless computing with OpenWhisk.',
      url: 'https://www.youtube.com/watch?v=d8yeifo0NYk',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'deck'
    },
    {
      date: '2017-06-08', year: 2017, kind: 'Talk',
      title: 'Rapidly build Cognitive applications with IBM Cloud',
      venue: 'OSCon Hong Kong — virtual support',
      role: 'Speaker, supporting the programme remotely',
      detail: 'The demo behind the session walks through building cognitive applications with Watson Conversation services on IBM Cloud.',
      url: 'https://www.youtube.com/watch?v=N7gEO-Q9rT4',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'deck'
    },
    {
      date: '2017-05-26', year: 2017, kind: 'Talk',
      title: 'Practitioner: How to Bluemix',
      venue: 'IBM India Cloud Forum, Mumbai',
      role: 'Speaker',
      detail: 'A practitioner’s session on IBM Cloud, rather than a product pitch.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2017-05-13', year: 2017, kind: 'Panel',
      title: 'Serverless Architecture: Why, What and How',
      venue: 'Microsoft Office, Bangalore — the first Serverless meetup there',
      role: 'Panelist',
      detail: 'On how the community invents words like microservices, DevOps and serverless to bring attention and traction to known technologies. Written up afterwards by the organiser.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2017-04-25', year: 2017, kind: 'Talk',
      title: 'Go Cloud Native with IBM Bluemix Developer Console',
      venue: 'Great Indian Developer Summit (GIDS), IISc, Bangalore',
      role: 'Speaker — two talks across the summit',
      detail: 'Patterns-first approach: pick a building block and the services to wire into it, and the console generates a runnable starter project for a mobile app, web app, backend-for-frontend or microservice.',
      url: 'https://speakerdeck.com/vidyasagarmsc/go-cloud-native-with-ibm-bluemix-developer-console-gids17',
      source: 'https://vmacwrites.wordpress.com/2017/05/05/patterns-first-with-bluemix-developer-console/',
      evidence: 'deck'
    },
    {
      date: '2017-03-29', year: 2017, kind: 'Meetup',
      title: 'BlueCoders: Cloud Native Patterns, from Mobile to Microservice',
      venue: 'Bangalore',
      role: 'Organiser and speaker',
      detail: 'Moved the group’s programme from mobile towards cloud native patterns.',
      url: 'https://www.meetup.com/BlueCoders/',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2017-03', year: 2017, kind: 'Meetup',
      title: 'BlueCoders: Ionic, NodeJS and Backend for FrontEnd via the Bluemix generator',
      venue: 'Bangalore',
      role: 'Organiser and speaker',
      detail: 'A hands-on path from an Ionic client to a generated NodeJS backend.',
      url: 'https://www.meetup.com/BlueCoders/',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2017-03', year: 2017, kind: 'Talk',
      title: 'Bring Watson to your telephone',
      venue: 'IBM InterConnect 2017, Las Vegas',
      role: 'Speaker — one talk and four hands-on labs',
      detail: 'Introducing the IBM WebSphere Connect Voice Gateway for Watson: a cognitive voice service that joins call centres to Watson services and existing telephony. IBM folded InterConnect into IBM Think the following year.',
      url: 'https://www.slideshare.net/slideshow/bring-ibm-watson-to-your-telephone/73540712',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'deck'
    },
    {
      date: '2017-02-13', year: 2017, kind: 'Talk',
      title: 'Digital Innovation',
      venue: 'Regional Science Centre, Tirupati',
      role: 'Speaker',
      detail: 'An outreach session outside the main developer circuit.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2017-02-08', year: 2017, kind: 'Meetup',
      title: 'BlueCoders: Introduction to OpenWhisk',
      venue: 'Bangalore',
      role: 'Organiser and speaker',
      detail: 'An introduction to serverless computing on OpenWhisk, ahead of the group’s later service-chaining lab.',
      url: 'https://www.meetup.com/BlueCoders/',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2016-12', year: 2016, kind: 'Workshop',
      title: 'Swift@IBM full-day workshop',
      venue: 'IBM India, Bangalore',
      role: 'Workshop lead — Swift introduction and a hands-on Kitura lab',
      detail: 'Ran for the SwiftBLR community at the IBM campus, on the back of the session published on the Swift@IBM developer blog.',
      url: 'https://vmacwrites.wordpress.com/2016/12/22/swift-on-ibm-bluemix/',
      source: 'https://vmacwrites.wordpress.com/2016/12/22/swift-on-ibm-bluemix/',
      evidence: 'self'
    },
    {
      date: '2016-12', year: 2016, kind: 'Talk',
      title: 'Idea to App in minutes with IBM Bluemix',
      venue: 'Cloud Innovation Forum',
      role: 'Speaker',
      detail: 'The short path from an idea to a running application on IBM Cloud.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2016-10', year: 2016, kind: 'Talk',
      title: 'Bringing Swift to Cloud',
      venue: 'IBM Cloud Technical University 2016, Madrid, Spain',
      role: 'Speaker — my first international presentation',
      detail: 'Taking Swift from the client to the server side on IBM Cloud, with Kitura as the framework on the back end.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2016-09', year: 2016, kind: 'Talk',
      title: 'Swiftly, Go Cloud',
      venue: 'Mobile Developer Summit, Bangalore — organised by Saltmarch Media',
      role: 'Speaker',
      detail: 'The summit drew 1,000+ attendees to J.N. Tata Auditorium, and the public recap names the international and keynote speakers. My session is listed in my own engagement notes, and the deck is on SpeakerDeck.',
      url: 'https://speakerdeck.com/vidyasagarmsc/swiftly-go-cloud-swift-at-ibm',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'deck'
    },
    {
      date: '2016-08-26', year: 2016, kind: 'Talk',
      title: 'Build, run and manage MobileFirst apps using Eclipse',
      venue: 'Eclipse Summit 2016, Bengaluru',
      role: 'Speaker — accepted talk, 45 minutes, beginner',
      detail: 'MobileFirst Studio as an Eclipse plug-in for rich mobile web, native and hybrid apps, with an embedded MobileFirst Server. Ran 05:15–06:00 in Sigma Hall 1.',
      url: 'https://confengine.com/conferences/eclipse-summit-2016/proposal/2446/build-run-and-manage-mobilefirst-apps-using-eclipse',
      source: 'https://confengine.com/user/vidyasagar-msc',
      evidence: 'recording'
    },
    {
      date: '2016-08', year: 2016, kind: 'Talk',
      title: 'What’s in Bluemix Mobile Services for FinTech',
      venue: 'IBM Engage',
      role: 'Speaker',
      detail: 'Mobile services applied to financial services workloads.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2016-07', year: 2016, kind: 'Workshop',
      title: 'Hybrid vs Native app development',
      venue: 'Mobile Workshop, MSRIT, Bangalore',
      role: 'Workshop lead',
      detail: 'A campus workshop weighing hybrid against native approaches.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2016-07', year: 2016, kind: 'Talk',
      title: 'Bluemix Offerings for Swift Developers',
      venue: 'AppFest 2016, by Mobile 10X',
      role: 'Speaker',
      detail: 'What IBM Cloud offered Swift developers at the time — the same ground covered in the Swift@IBM workshop a few months later.',
      url: 'https://www.slideshare.net/vidyasagarMachupalli',
      source: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/',
      evidence: 'self'
    },
    {
      date: '2015-02-14', year: 2015, kind: 'Talk',
      title: 'Valentine with AngularJS',
      venue: 'BDotNet, at Microsoft, Bangalore',
      role: 'Speaker',
      detail: 'A hands-on session on AngularJS and single-page applications, building the client in Brackets and then again in Visual Studio 2015, against a NodeJS server.',
      url: 'https://vmacwrites.wordpress.com/2015/02/15/bdotnet-valentine-with-angularjs/',
      source: 'https://vmacwrites.wordpress.com/2015/02/15/bdotnet-valentine-with-angularjs/',
      evidence: 'self'
    },
    {
      date: '2015-01', year: 2015, kind: 'Talk',
      title: 'DocumentDB — NoSQL on cloud',
      venue: 'Reboot 2015, Bangalore',
      role: 'Speaker',
      detail: 'DocumentDB on Azure, at one of the Bengaluru developer conferences that seeded the DevOps and cloud-native circuit.',
      url: 'https://vmacwrites.wordpress.com/2015/01/31/reboot-documentdb-nosql-on-cloud/',
      source: 'https://vmacwrites.wordpress.com/2015/01/31/reboot-documentdb-nosql-on-cloud/',
      evidence: 'self'
    },
    {
      date: '2014-12-17', year: 2014, kind: 'Talk',
      title: 'Gaming session',
      venue: 'TechEd India 2014',
      role: 'Speaker',
      detail: 'Closed the year with a gaming session, having started the gaming track at a Microsoft DevCamp the previous November. Awarded “The Most Active Individual in the Gaming Community” at the event.',
      url: 'https://www.youtube.com/watch?v=wjfNeI9yI2w',
      source: 'https://vmacwrites.wordpress.com/2014/12/18/never-ending-love-for-game-a-moment-to-cherish-2/',
      evidence: 'self'
    },
    {
      date: '2014-12-14', year: 2014, kind: 'Talk',
      title: 'Best Practices in Game Development · Unity3D performance optimisation',
      venue: 'VideoGameFest, Bengaluru, by Dumadu Games',
      role: 'Speaker — two sessions in one evening',
      detail: 'A Unity3D performance optimisation session first, then best practices in game development at 7pm the same day.',
      url: 'https://vmacwrites.wordpress.com/2014/12/21/talk-best-practices-in-game-development/',
      source: 'https://vmacwrites.wordpress.com/2014/12/21/talk-best-practices-in-game-development/',
      evidence: 'self'
    }
  ],

  platforms: [
    { name: "DZone", icon: "DZ", color: "#e34c26", stat: "650.7K", label: "Total pageviews · 106 articles", url: "https://dzone.com/authors/vidyasagarmsc" },
    { name: "Medium", icon: "M", color: "#000", stat: "717", label: "Followers", url: "https://medium.com/@VidyasagarMSC" },
    { name: "Dev.to", icon: "<i class='fab fa-dev'></i>", color: "#0a0a0a", stat: "60K+", label: "Total views · 45 posts", url: "https://dev.to/vidyasagarmsc" },
    { name: "Hackernoon", icon: "HN", color: "#00ff7f", stat: "Top Writer", label: "10 articles · 2024–2026", url: "https://hackernoon.com/u/vidyasagarmsc" },
    { name: "Substack", icon: "S", color: "#ff671e", stat: "500+", label: "Subscribers", url: "https://vmacwrites.substack.com" },
    { name: "VMacWrites", icon: "W", color: "#21759b", stat: "134", label: "Posts dating back to 2010", url: "https://vmacwrites.wordpress.com" },
    { name: "GitHub", icon: "<i class='fab fa-github'></i>", color: "#333", stat: "15+", label: "Public repositories", url: "https://github.com/VidyasagarMSC" },
    { name: "Google Scholar", icon: "<i class='fas fa-graduation-cap'></i>", color: "#4285f4", stat: "1", label: "Citation", url: "https://scholar.google.com/citations?user=dbcWkvwAAAAJ" }
  ],
  topics: [
    "AI", "Cloud", "Quantum", "Security", "Architecture", "DevOps", "Python", "Containers", "Kubernetes", "Observability", "Data Science", "Mathematics", "Open Source", "Developer Advocacy", "Enterprise Architecture"
  ]
};

const platformColors = {
  "DZone": { bg: "#e34c26", text: "#fff" },
  "Medium": { bg: "#000", text: "#fff" },
  "Dev.to": { bg: "#0a0a0a", text: "#fff" },
  "Hackernoon": { bg: "#00ff7f", text: "#000" },
  "Substack": { bg: "#ff671e", text: "#fff" },
  "VMacWrites": { bg: "#21759b", text: "#fff" },
  // The 49 IBM Cloud guides (2016-2021) that DZone has since unpublished. They
  // are a real venue rather than a DZone variant because only 9 of the 49 have
  // any surviving copy at all, and those point at a Wayback snapshot rather
  // than at dzone.com. Muted slate reads as "archive", not "live publication".
  "DZone Legacy": { bg: "#6b7280", text: "#fff" },
  // Chatbots Life is a Medium publication, not a platform of its own: the same
  // piece carries the Medium permalink as its primary and the publication copy
  // as an alsoPublished record. It gets a colour so the venue is distinguishable
  // where two names appear together.
  "Chatbots Life": { bg: "#5b21b6", text: "#fff" },
  "GitHub": { bg: "#333", text: "#fff" },
  "Google Scholar": { bg: "#4285f4", text: "#fff" },
  "Featured": { bg: "var(--primary)", text: "#fff" }
};

const topicIcons = {
  "AI": "<i class='fas fa-brain'></i>",
  "Cloud": "<i class='fas fa-cloud'></i>",
  "Quantum": "<i class='fas fa-atom'></i>",
  "Security": "<i class='fas fa-shield-halved'></i>",
  "Architecture": "<i class='fas fa-sitemap'></i>",
  "DevOps": "<i class='fas fa-cogs'></i>",
  "Python": "<i class='fab fa-python'></i>",
  "Containers": "<i class='fas fa-cube'></i>",
  "Kubernetes": "<i class='fas fa-ship'></i>",
  "Observability": "<i class='fas fa-chart-line'></i>",
  "Data Science": "<i class='fas fa-database'></i>",
  "Mathematics": "<i class='fas fa-square-root-variable'></i>",
  "Open Source": "<i class='fab fa-osi'></i>",
  "Developer Advocacy": "<i class='fas fa-users'></i>",
  "Enterprise Architecture": "<i class='fas fa-building'></i>"
};

// Every publication of an article other than its primary one. Reconciling the
// cross-posted duplicates moved 37 DZone runs and 31 Medium copies off their own
// rows and onto the row that already held the article, as alsoPublished records;
// without rendering them those links exist in the data and nowhere else.
//
// These are rendered on the card, not the index row, because the index row is
// itself an anchor and an anchor cannot contain another anchor. The browser
// closes the outer one and the row stops being clickable.
function alsoPublishedLinks(a) {
  const extra = (a.alsoPublished || []).filter(x => x && x.venue);
  if (!extra.length) return '';
  return `<div class="pub-also">` + extra.map(x => {
    const when = x.date ? `<span class="pub-also-date">${x.date.slice(0, 7)}</span>` : '';
    // An extra publication with no url is one whose copy does not survive
    // anywhere. It is still shown, as a label rather than a link -- the article
    // did run in that venue, and dropping the record hides a fact. Rendering
    // only linkable extras made the DZone runs of several articles disappear
    // from the card entirely.
    const inner = `<i class="${getPlatformIcon(x.venue)}"></i> ${x.venue}${when}`;
    return x.url
      ? `<a href="${x.url}" target="_blank" rel="noopener" class="pub-also-link" data-venue="${x.venue}">${inner}</a>`
      : `<span class="pub-also-link is-gone" data-venue="${x.venue}" title="Removed from ${x.venue}; no copy survives">${inner}</span>`;
  }).join('') + `</div>`;
}

// Speaking engagements, newest first, written in the author's own voice.
//
// Each row links twice: to the session or recording, and to the page that records
// it. The second link is the one that makes the claim checkable, so it is
// labelled as the source rather than left as an anonymous second arrow.
//
// The evidence field on each entry is deliberately not rendered. It is an
// internal record of provenance -- 'recording' where the organiser who ran the
// event names the session, 'deck' where a deck or recording survives, 'self'
// where the entry rests on the author's own list -- kept so a future edit knows
// which rows to re-verify. It was on screen briefly and read as hedging; the
// author asked for it to come off, which is a fair editorial call.
function talkDateLabel(t) {
  // Three granularities, because the sources are that precise: a session with a
  // slot time, an event with only a month, and a conference year.
  if (t.date && /^\d{4}-\d{2}-\d{2}$/.test(t.date)) {
    return new Date(t.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  if (t.date && /^\d{4}-\d{2}$/.test(t.date)) {
    const [y, m] = t.date.split('-');
    return new Date(Date.UTC(Number(y), Number(m) - 1, 1))
      .toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
  }
  return String(t.year);
}

function renderTalks() {
  const box = document.getElementById('talksList');
  if (!box) return;
  const talks = [...(researchData.talks || [])]
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  box.innerHTML = talks.map(t => {
    return `<li class="talk-item" data-kind="${t.kind}">
      <div class="talk-rail">
        <span class="talk-when">${talkDateLabel(t)}</span>
        <span class="talk-kind">${t.kind}</span>
      </div>
      <div class="talk-main">
        <h4 class="talk-title"><a href="${t.url}" target="_blank" rel="noopener">${t.title}</a></h4>
        <p class="talk-venue">${t.venue}</p>
        <p class="talk-role">${t.role}</p>
        ${t.detail ? `<p class="talk-detail">${t.detail}</p>` : ''}
        <p class="talk-foot">
          <a class="talk-source" href="${t.source}" target="_blank" rel="noopener">Source <i class="fas fa-arrow-up-right-from-square"></i></a>
        </p>
      </div>
    </li>`;
  }).join('');

  const count = document.getElementById('talkCount');
  if (count) {
    const n = talks.length;
    count.textContent = n + (n === 1 ? ' engagement' : ' engagements');
  }
  // The dashboard stat reads from the same array rather than carrying its own
  // number. A second hardcoded figure here is how the two drifted apart before.
  const stat = document.getElementById('speakingStat');
  if (stat) stat.textContent = String(talks.length);
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function getPlatformStyle(platform) {
  const c = platformColors[platform] || { bg: "#666", text: "#fff" };
  return `background:${c.bg};color:${c.text}`;
}

function getPlatformIcon(platform) {
  return ({"DZone":"fas fa-code","Medium":"fab fa-medium","Dev.to":"fab fa-dev","Hackernoon":"fab fa-hacker-news","Substack":"fas fa-envelope","VMacWrites":"fab fa-wordpress","Featured":"fas fa-star","DZone Legacy":"fas fa-box-archive","Chatbots Life":"fas fa-robot"})[platform] || "fas fa-star";
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Article dates are stored as ISO, because that is what every source hands out
// and it sorts correctly. Cards want a human reading, so format on the way out —
// and stay honest about entries that are only month- or year-precise.
function prettyDate(raw) {
  const s = String(raw || '').trim();
  let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (m) return `${MONTH_NAMES[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
  m = /^(\d{4})-(\d{2})$/.exec(s);
  if (m) return `${MONTH_NAMES[Number(m[2]) - 1]} ${m[1]}`;
  return s;
}

// The full bibliography is 310 items, and this grid is a filterable hub rather
// than the reading surface — latest-posts.html carries the complete dated index.
// Rendering all of them here produced a 6,000-node, 52,000px wall, so the grid
// pages itself and filters still narrow it from the top.
const PUB_PAGE = 24;
let pubVisible = PUB_PAGE;

function renderPublicationCards(articles) {
  const grid = document.getElementById('publicationsGrid');
  if (!grid) return;
  const shown = articles.slice(0, pubVisible);
  grid.innerHTML = shown.map(a => {
    const badge = `<span class="pub-platform-badge" style="${getPlatformStyle(a.platform)}"><i class="${getPlatformIcon(a.platform)}"></i> ${a.platform}</span>`;
    const yb = `<span class="pub-year-badge"><i class="fas fa-calendar"></i> ${a.year}</span>`;
    const meta = [];
    if (a.date) meta.push(`<span><i class="fas fa-calendar-alt"></i> ${prettyDate(a.date)}</span>`);
    if (a.views) meta.push(`<span><i class="fas fa-eye"></i> ${a.views} views</span>`);
    if (a.readingTime) meta.push(`<span><i class="fas fa-clock"></i> ${a.readingTime}</span>`);
    if (a.citations) meta.push(`<span class="cite-badge"><i class="fas fa-quote-right"></i> ${a.citations} Citation${a.citations > 1 ? 's' : ''}</span>`);
    const tags = a.topics.map(t => `<span class="pub-tag-topic">${topicIcons[t] || ''} ${t}</span>`).join('');
    return `<div class="pub-card" data-id="${a.id}">
      <div class="pub-top">${yb} ${badge}</div>
      <h4>${a.title}</h4>
      <div class="pub-meta">${meta.join('')}</div>
      <div class="pub-abstract">${a.summary}</div>
      <div class="pub-tags">${tags}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;align-items:center;">
        ${a.url && a.url !== '#'
          ? `<a href="${a.url}" target="_blank" rel="noopener" class="pub-link">${a.archived ? 'Read Archived Copy' : 'Read Publication'} <i class="fas fa-arrow-right"></i></a>`
          : ''}
        ${a.legacy && !(a.url && a.url !== '#')
          ? '<span class="pub-gone-note"><i class="fas fa-box-archive"></i> Removed from DZone &mdash; no surviving copy</span>' : ''}
        <button class="cite-btn" onclick="window.openCitation(${a.id})"><i class="fas fa-quote-right"></i> Cite</button>
      </div>
      ${alsoPublishedLinks(a)}
    </div>`;
  }).join('');

  // Progressive reveal. Built into the grid's own wrapper so research.html does
  // not need a second element declared for it.
  let more = grid.parentElement.querySelector('#pubMore');
  if (pubVisible >= articles.length) {
    if (more) more.remove();
    return;
  }
  if (!more) {
    more = document.createElement('div');
    more.id = 'pubMore';
    more.className = 'pub-more';
    grid.insertAdjacentElement('afterend', more);
  }
  const remaining = articles.length - shown.length;
  more.innerHTML = `<button type="button" class="pub-more-btn" id="pubMoreBtn">Show ${remaining} more <i class="fas fa-chevron-down"></i></button>
    <p class="pub-more-note">Showing ${shown.length} of ${articles.length} — the <a href="latest-posts.html">full dated index</a> lists every article.</p>`;
  more.querySelector('#pubMoreBtn').addEventListener('click', () => {
    pubVisible += PUB_PAGE;
    // Keep the current filter; only the offset moves.
    updatePublications(false);
  });
}

function renderFeaturedResearch() {
  const container = document.getElementById('featuredResearch');
  if (!container) return;
  const featured = researchData.articles.filter(a => a.isFeatured || a.citations);
  container.innerHTML = featured.map(a => {
    const ct = a.citations ? `<span class="pub-tag-topic"><i class="fas fa-quote-right"></i> ${a.citations} Citation${a.citations > 1 ? 's' : ''}</span>` : '';
    const tt = '<span class="pub-tag-type"><i class="fas fa-pen"></i> Technical Article</span>';
    const tags = a.topics.map(t => `<span class="pub-tag-topic">${t}</span>`).join('');
    const authors = '<div class="pub-authors"><strong>Vidyasagar Machupalli</strong></div>';
    return `<div class="pub-card" style="border-left:4px solid var(--orange);">
      <div class="pub-top"><span class="pub-year-badge"><i class="fas fa-calendar"></i> ${a.year}</span><span class="pub-platform-badge" style="background:var(--orange);color:white;">${a.citations ? 'Cited Publication' : 'Featured'}</span></div>
      <h4>${a.title}</h4>
      ${authors}
      <div class="pub-meta"><span><i class="fas fa-building"></i> ${a.platform || 'Technical Article'}</span>${a.citations ? `<span class="cite-badge"><i class="fas fa-quote-right"></i> Cited by ${a.citations}</span>` : ''}</div>
      <div class="pub-abstract">${a.summary}</div>
      <div class="pub-tags">${ct} ${tt} ${tags}</div>
      <button class="cite-btn" onclick="window.openCitation(${a.id})"><i class="fas fa-quote-right"></i> Cite</button>
    </div>`;
  }).join('');
}

function renderPlatformGrid() {
  const grid = document.getElementById('platformGrid');
  if (!grid) return;
  grid.innerHTML = researchData.platforms.map(p => {
    const ih = p.icon.includes('<') ? p.icon : `<span style="font-weight:700;">${p.icon}</span>`;
    return `<a href="${p.url}" target="_blank" class="platform-card" rel="noopener">
      <div class="p-icon" style="background:${p.color};${p.color === '#00ff7f' ? 'color:#000;' : ''}">${ih}</div>
      <div class="p-body"><h4>${p.name}</h4><div class="p-stat">${p.stat}</div><div class="p-label">${p.label}</div></div>
    </a>`;
  }).join('');
}

function renderTopicExplorer() {
  const container = document.getElementById('topicExplorer');
  if (!container) return;
  container.innerHTML = researchData.topics.map(t => {
    const count = researchData.articles.filter(a => a.topics.includes(t)).length;
    const icon = topicIcons[t] || '<i class="fas fa-tag"></i>';
    return `<div class="topic-explorer-item" onclick="filterByTopic('${t}')">
      <div class="te-icon">${icon}</div>
      <h5>${t}</h5>
      <div class="te-count">${count} article${count !== 1 ? 's' : ''}</div>
    </div>`;
  }).join('');
}

function renderTrending() {
  const grid = document.getElementById('trendingGrid');
  if (!grid) return;
  const sorted = [...researchData.articles].filter(a => a.views).sort((a, b) => {
    const av = parseInt(a.views.replace(/[K+,]/g, '')) * (a.views.includes('K') ? 1000 : 1);
    const bv = parseInt(b.views.replace(/[K+,]/g, '')) * (b.views.includes('K') ? 1000 : 1);
    return bv - av;
  }).slice(0, 6);
  grid.innerHTML = sorted.map((a, i) => {
    return `<a href="${a.url}" target="_blank" class="trending-item">
      <div class="ti-rank">#${i + 1}</div>
      <div class="ti-info"><div class="ti-title">${a.title}</div><div class="ti-meta"><span>${a.platform}</span><span>${a.year}</span></div></div>
      <div class="ti-views"><i class="fas fa-eye"></i> ${a.views}</div>
    </a>`;
  }).join('');
}

// ============================================
// FILTERING
// ============================================
let activePlatform = 'all';
let activeTopic = 'all';
let searchQuery = '';

// An article's venues: every platform it ran on, falling back to the single
// primary for entries that predate the cross-posting data.
function venueList(a) {
  return (a.platforms && a.platforms.length) ? a.platforms : [a.platform];
}

function getFilteredArticles() {
  let result = [...researchData.articles];
  // A cross-posted article is one row carrying several venues, so filtering by
  // platform is a membership test over platforms[] — not equality on the
  // primary. Filtering on `platform` would hide it from the second venue.
  if (activePlatform !== 'all') result = result.filter(a => venueList(a).includes(activePlatform));
  if (activeTopic !== 'all') result = result.filter(a => a.topics.includes(activeTopic));
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    result = result.filter(a =>
      a.title.toLowerCase().includes(q) ||
      (a.summary || '').toLowerCase().includes(q) ||
      a.topics.some(t => t.toLowerCase().includes(q)) ||
      venueList(a).some(p => p.toLowerCase().includes(q))
    );
  }
  return result;
}

function updatePublications(resetPage = true) {
  // Any change of filter or query re-paginates from the top, otherwise a visitor
  // who expanded to 200 rows then picked a platform keeps the stale offset and
  // sees an empty-looking page.
  if (resetPage) pubVisible = PUB_PAGE;
  const filtered = getFilteredArticles();
  renderPublicationCards(filtered);
  const shown = Math.min(pubVisible, filtered.length);
  const rc = document.getElementById('resultsCount');
  if (rc) {
    rc.textContent = shown < filtered.length
      ? `Showing ${shown} of ${filtered.length} articles`
      : `${filtered.length} article${filtered.length !== 1 ? 's' : ''}`;
  }
  const pc = document.getElementById('pubCount');
  if (pc) pc.textContent = `(${researchData.articles.length} total)`;
}

// Filter buttons (research page only)
if (document.getElementById('publicationsGrid')) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const group = this.dataset.filterGroup;
      const value = this.dataset.filter;
      document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (group === 'platform') activePlatform = value;
      if (group === 'topic') activeTopic = value;
      updatePublications();
    });
  });
}

// ============================================
// SEARCH
// ============================================
let searchInput = null;
let searchResults = null;

function initSearch() {
  searchInput = document.getElementById('researchSearch');
  searchResults = document.getElementById('searchResults');
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', function() { performSearch(this.value); });

  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') {
      searchInput.blur();
      searchResults.classList.remove('open');
    }
  });
}

function performSearch(query) {
  if (!searchResults) return;
  searchQuery = query;
  if (!query) {
    searchResults.classList.remove('open');
    updatePublications();
    renderTopicFilters('');
    return;
  }
  const q = query.toLowerCase();
  const results = researchData.articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    (a.summary || '').toLowerCase().includes(q) ||
    a.topics.some(t => t.toLowerCase().includes(q)) ||
    venueList(a).some(p => p.toLowerCase().includes(q))
  ).slice(0, 12);

  if (results.length === 0) {
    searchResults.innerHTML = `<div class="search-empty"><i class="fas fa-search"></i><p>No results found for "${query}"</p></div>`;
  } else {
    searchResults.innerHTML = results.map(r => {
      const c = platformColors[r.platform] || { bg: "#666", text: "#fff" };
      const icon = r.platform === 'DZone' ? 'D' : r.platform === 'Medium' ? 'M' : r.platform === 'Dev.to' ? '<i class="fab fa-dev"></i>' : r.platform === 'Hackernoon' ? 'HN' : r.platform === 'Substack' ? 'S' : r.platform === 'VMacWrites' ? 'W' : '📄';
      return `<div class="search-result-item" onclick="window.open('${r.url || '#'}','_blank')">
        <div class="sr-icon" style="background:${c.bg};${c.text === '#000' ? 'color:#000;' : ''}">${icon}</div>
        <div class="sr-info">
          <div class="sr-title">${r.title.replace(new RegExp(q, 'gi'), m => '<strong style="color:var(--orange-light)">' + m + '</strong>')}</div>
          <div class="sr-meta"><span>${r.platform}</span><span>${r.year}</span>${r.views ? `<span>${r.views} views</span>` : ''}</div>
        </div>
        <div class="sr-tags">${r.topics.slice(0, 3).map(t => `<span class="sr-tag">${t}</span>`).join('')}</div>
      </div>`;
    }).join('');
  }
  searchResults.classList.add('open');
  updatePublications();
  renderTopicFilters(query);
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.search-container')) {
    searchResults.classList.remove('open');
  }
});

window.filterByTopic = function(topic) {
  activeTopic = topic;
  document.querySelectorAll('.filter-btn[data-filter-group="topic"]').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.filter === topic) b.classList.add('active');
  });
  searchInput.value = '';
  searchQuery = '';
  updatePublications();
  document.getElementById('researchSearch').scrollIntoView({ behavior: 'smooth' });
};

// ============================================
// TOPIC FILTERS
// ============================================
function renderTopicFilters(query) {
  const container = document.getElementById('topicFilters');
  if (!container) return;
  container.innerHTML = researchData.topics.map(t => {
    const count = researchData.articles.filter(a => a.topics.includes(t)).length;
    const active = activeTopic === t && !query ? 'active' : '';
    return `<button class="topic-filter-btn ${active}" onclick="filterByTopic('${t}')">${topicIcons[t] || ''} ${t} <span class="tf-count">${count}</span></button>`;
  }).join('');
}

// ============================================
// KNOWLEDGE GRAPH
// ============================================
function drawKnowledgeGraph() {
  const canvas = document.getElementById('knowledgeGraph');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = rect.height;
  ctx.clearRect(0, 0, W, H);

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const nodeColor = isDark ? 'rgba(249,115,22,0.8)' : 'rgba(249,115,22,0.7)';
  const edgeColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(249,115,22,0.12)';
  const textColor = isDark ? 'rgba(255,255,255,0.85)' : 'rgba(60,60,80,0.9)';
  const labelBg = isDark ? 'rgba(15,15,30,0.85)' : 'rgba(255,255,255,0.9)';

  const topics = researchData.topics.slice(0, 12);
  const angles = topics.map((_, i) => (2 * Math.PI * i) / topics.length - Math.PI / 2);
  const cx = W / 2, cy = H / 2;
  const isCompact = W < 460;
  const radius = Math.min(W, H) * (isCompact ? 0.28 : 0.32);
  const baseNodeR = Math.max(14, Math.min(W, H) * 0.035);
  const nodes = topics.map((t, i) => ({
    x: cx + radius * Math.cos(angles[i]),
    y: cy + radius * Math.sin(angles[i]),
    label: t,
    count: researchData.articles.filter(a => a.topics.includes(t)).length,
    radius: baseNodeR + Math.min(researchData.articles.filter(a => a.topics.includes(t)).length * 1.2, baseNodeR)
  }));

  // Draw edges
  ctx.strokeStyle = edgeColor;
  ctx.lineWidth = 1;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const shared = researchData.articles.filter(a => a.topics.includes(nodes[i].label) && a.topics.includes(nodes[j].label)).length;
      if (shared > 0) {
        ctx.globalAlpha = Math.min(0.1 + shared * 0.04, 0.4);
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;

  // Center hub
  const hubR = Math.min(30, Math.min(W, H) * 0.06);
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubR + 10);
  grad.addColorStop(0, isDark ? 'rgba(249,115,22,0.15)' : 'rgba(249,115,22,0.1)');
  grad.addColorStop(1, 'rgba(249,115,22,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, hubR + 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(249,115,22,0.04)';
  ctx.beginPath();
  ctx.arc(cx, cy, hubR * 0.5, 0, 2 * Math.PI);
  ctx.fill();

  const centerFontSize = Math.max(9, Math.min(W, H) * 0.018);
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(249,115,22,0.6)';
  ctx.font = `bold ${centerFontSize}px Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Research', cx, cy - centerFontSize * 0.5);
  ctx.fillText('Domains', cx, cy + centerFontSize * 0.9);

  // Draw nodes
  const labelFontSize = Math.max(8, Math.min(W, H) * 0.018);
  const countFontSize = Math.max(9, Math.min(W, H) * 0.02);
  nodes.forEach(n => {
    const glowR = n.radius * 2;
    const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
    glow.addColorStop(0, 'rgba(249,115,22,0.1)');
    glow.addColorStop(1, 'rgba(249,115,22,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(n.x, n.y, glowR, 0, 2 * Math.PI);
    ctx.fill();

    const ngrad = ctx.createRadialGradient(n.x - 3, n.y - 3, 0, n.x, n.y, n.radius);
    ngrad.addColorStop(0, 'rgba(249,115,22,0.5)');
    ngrad.addColorStop(0.7, 'rgba(249,115,22,0.85)');
    ngrad.addColorStop(1, 'rgba(234,88,12,0.8)');
    ctx.fillStyle = ngrad;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = `600 ${countFontSize}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(n.count, n.x, n.y);

    ctx.font = `500 ${labelFontSize}px Inter, sans-serif`;
    const tw = ctx.measureText(n.label).width;
    const lw = tw + 12;
    const lh = labelFontSize + 8;
    const lx = n.x - lw / 2;
    const ly = n.y + n.radius + 4;

    ctx.fillStyle = labelBg;
    ctx.beginPath();
    const r = 4;
    ctx.moveTo(lx + r, ly);
    ctx.lineTo(lx + lw - r, ly);
    ctx.quadraticCurveTo(lx + lw, ly, lx + lw, ly + r);
    ctx.lineTo(lx + lw, ly + lh - r);
    ctx.quadraticCurveTo(lx + lw, ly + lh, lx + lw - r, ly + lh);
    ctx.lineTo(lx + r, ly + lh);
    ctx.quadraticCurveTo(lx, ly + lh, lx, ly + lh - r);
    ctx.lineTo(lx, ly + r);
    ctx.quadraticCurveTo(lx, ly, lx + r, ly);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = textColor;
    ctx.font = `500 ${labelFontSize}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(n.label, n.x, ly + lh / 2);
  });

  const legendEl = document.getElementById('kgLegend');
  if (legendEl) {
    legendEl.innerHTML = '';
    const colors = ['#f97316', '#ea580c', '#f59e0b', '#f43f5e', '#10b981', '#e11d48'];
    topics.slice(0, 6).forEach((t, i) => {
      const item = document.createElement('span');
      item.className = 'kg-legend-item';
      item.innerHTML = `<span class="kg-dot" style="background:${colors[i % colors.length]}"></span> ${t}`;
      legendEl.appendChild(item);
    });
  }
}

// Make drawKnowledgeGraph globally accessible
window.drawKnowledgeGraph = drawKnowledgeGraph;

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (!Number.isFinite(target) || target <= 0) return;
    // Respect reduced-motion — snap straight to the final value.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target;
      return;
    }
    const duration = 1200;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      // Round (not floor) so the last frame lands exactly on the target,
      // and clamp so a stale rAF timestamp can never render a negative.
      el.textContent = Math.max(0, Math.min(target, Math.round(eased * target)));
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ============================================
// CITATION MODAL
// ============================================
function getCitationFormats(articleId) {
  const a = researchData.articles.find(x => x.id === articleId);
  if (!a) return {};
  const author = 'Vidyasagar Machupalli';
  const coAuthors = [author];
  const authorList = coAuthors.join(', ');
  const year = a.year || a.date?.split(' ').pop() || 'n.d.';
  const title = a.title;
  const publisher = a.platform || 'Technical Article';
  const url = a.url && a.url !== '#' ? a.url : 'https://vidyasagarmsc.github.io';
  const accessed = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return {
    apa: `${authorList} (${year}). *${title}*. ${publisher}. ${url}`,
    mla: `${authorList}. "${title}." ${publisher}, ${year}. ${url}.`,
    chicago: `${authorList}. "${title}." ${publisher}. ${year}. ${url}.`,
    ieee: `${coAuthors[0]}${coAuthors.length > 1 ? ' et al.' : ''}, "${title}," ${publisher}, ${year}. [Online]. Available: ${url}`,
    bibtex: `@article{${a.id},
  author={${coAuthors.join(' and ')}},
  title={${title}},
  journal={${publisher}},
  year={${year}},
  url={${url}}
}`,
    harvard: `${authorList} (${year}) '${title}', ${publisher}. Available at: ${url} (Accessed: ${accessed}).`
  };
}

window.openCitation = function(articleId) {
  const a = researchData.articles.find(x => x.id === articleId);
  if (!a) return;

  const formats = getCitationFormats(articleId);
  const formatNames = Object.keys(formats);
  let activeFormat = formatNames[0];

  const overlay = document.createElement('div');
  overlay.className = 'citation-modal active';
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeCitation(); });

  const formatLabels = { apa: 'APA 7th', mla: 'MLA 9th', chicago: 'Chicago', ieee: 'IEEE', bibtex: 'BibTeX', harvard: 'Harvard' };

  function renderCitation(format) {
    activeFormat = format;
    const text = formats[format];
    overlay.innerHTML = `
      <div class="citation-modal-content" onclick="event.stopPropagation()">
        <div class="citation-modal-header">
          <h3><i class="fas fa-quote-right"></i> Cite This</h3>
          <button class="citation-modal-close" onclick="closeCitation()"><i class="fas fa-times"></i></button>
        </div>
        <div class="citation-modal-body">
          <div class="cite-title">${a.title}</div>
          <div class="cite-authors">Vidyasagar Machupalli</div>
          <div class="citation-format-tabs">
            ${formatNames.map(f => `<button class="citation-format-tab ${f === format ? 'active' : ''}" onclick="switchCitationFormat('${f}')">${formatLabels[f]}</button>`).join('')}
          </div>
          <textarea class="citation-text" id="citationText" readonly spellcheck="false">${text}</textarea>
          <div class="citation-actions">
            <button class="cite-copy-btn" onclick="copyCitation()"><i class="fas fa-copy"></i> Copy</button>
            <button class="cite-download-btn" onclick="downloadCitation()"><i class="fas fa-download"></i> Download .bib</button>
          </div>
        </div>
      </div>`;
  }

  window._citationFormats = formats;
  window._currentFormat = activeFormat;
  renderCitation(activeFormat);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', citationKeyHandler);
};

function citationKeyHandler(e) {
  if (e.key === 'Escape') closeCitation();
}

window.closeCitation = function closeCitation() {
  const modal = document.querySelector('.citation-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 200);
  }
  document.body.style.overflow = '';
  document.removeEventListener('keydown', citationKeyHandler);
}

window.switchCitationFormat = function(format) {
  window._currentFormat = format;
  const text = window._citationFormats[format];
  document.getElementById('citationText').value = text;
  document.querySelectorAll('.citation-format-tab').forEach(t => {
    t.classList.toggle('active', t.textContent.trim().toLowerCase().includes(format) ||
      (format === 'apa' && t.textContent.includes('APA')) ||
      (format === 'mla' && t.textContent.includes('MLA')) ||
      (format === 'bibtex' && t.textContent.includes('BibTeX')));
  });
};

window.copyCitation = function copyCitation() {
  const textarea = document.getElementById('citationText');
  const text = textarea.value;
  const btn = document.querySelector('.cite-copy-btn');
  const copySuccess = () => {
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = '<i class="fas fa-copy"></i> Copy'; btn.classList.remove('copied'); }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(copySuccess, () => { textarea.select(); document.execCommand('copy'); copySuccess(); });
  } else {
    textarea.select();
    document.execCommand('copy');
    copySuccess();
  }
}

window.downloadCitation = function downloadCitation() {
  const format = window._currentFormat || 'bibtex';
  const text = window._citationFormats[format] || window._citationFormats['bibtex'];
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = format === 'bibtex' ? 'citation.bib' : 'citation.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================
// CITATION STATS LOADER
// ============================================
async function fetchCitationStats() {
  try {
    const resp = await fetch('public/data/citations.json', { cache: 'no-cache' });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    updateCitationUI(data);
  } catch {
    // silent fallback — static HTML values remain
  }
}

function updateCitationUI(data) {
  const totalEl = document.getElementById('totalCitations');
  const hEl = document.getElementById('hIndex');
  const trendEl = document.getElementById('trendValue');
  if (!data || !data.metrics) return;

  if (totalEl) {
    // Only set the target — animateCounters() owns the displayed value so it
    // never flashes 0 between the fetch resolving and the rAF loop starting.
    totalEl.dataset.target = Math.max(1, data.metrics.total_citations);
  }
  if (hEl) {
    hEl.textContent = data.metrics.h_index || 1;
  }
  if (trendEl) {
    const thisYear = data.metrics.this_year_citations || 0;
    trendEl.textContent = `+${thisYear}`;
  }
}

// ============================================
// FADE-IN OBSERVER FOR RESEARCH PAGE
// ============================================
function initResearchFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============================================
// INIT
// ============================================
async function init() {
  initSearch();
  renderFeaturedResearch();
  renderPlatformGrid();
  renderTopicExplorer();
  renderTrending();
  renderTopicFilters('');
  updatePublications();
  renderTalks();
  await fetchCitationStats();
  animateCounters();
  drawKnowledgeGraph();
  initResearchFadeIn();

  // Re-draw on theme change
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => setTimeout(drawKnowledgeGraph, 100));
  }

  // Re-draw on resize
  const resizeKG = () => {
    clearTimeout(window._kgResize);
    window._kgResize = setTimeout(drawKnowledgeGraph, 300);
  };
  window.addEventListener('resize', resizeKG);
}

// The bibliography is grouped into eras before years. Three bands, cut where the
// corpus itself changes character rather than at round numbers:
//   2010-2015  one venue (WordPress), 0% AI, 0% Kubernetes
//   2016-2021  Cloud 41% and Kubernetes 14%, DZone arrives, 49 legacy guides
//   2022-2026  AI 33%, HackerNoon and Substack arrive, six venues
// Recency still reads first: eras run newest to oldest, newest at the top.
// data-platform lists every venue a row ran on. "|" rather than a space because
// "DZone Legacy" contains one; site.js splits on the same constant and filters
// by membership, so a cross-posted article stays a single row.
const VENUE_SEP = '|';

const ERAS = [
  { id: 'agentic', from: 2022, to: 2026, label: 'AI & Agentic Systems',
    blurb: 'Model runtimes, agent architectures, and the infrastructure under them.' },
  { id: 'cloud', from: 2016, to: 2021, label: 'Cloud & Kubernetes',
    blurb: 'IBM Cloud and Bluemix platform work: Terraform, Kubernetes, Knative, Watson.' },
  { id: 'foundations', from: 2010, to: 2015, label: 'Foundations',
    blurb: 'C#, Unity, and Windows — a single blog, before the DZone years.' }
];

// A year that predates every band (should not happen, but an unknown year must
// not silently vanish) lands in its own unlabelled band at the bottom.
function eraForYear(year) {
  const n = Number(year);
  if (!Number.isFinite(n)) return null;
  return ERAS.find(e => n >= e.from && n <= e.to) || null;
}

function initLatestPosts() {
  const grid = document.getElementById('latestPostsGrid');
  if (!grid) return;

  // A row with no surviving copy still belongs in the index. DZone removed 49 of
  // these guides, and only 9 have an archived copy, so the old `a.url` guard
  // silently dropped all 49 -- which is how a real body of work went missing.
  // Unlinked rows render as non-anchors carrying the same data-platform hook, so
  // filtering and counting treat them exactly like every other row.
  const articles = [...researchData.articles]
    .filter(a => a.url !== '#')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const indexCount = document.getElementById('indexCount');
  const unlinked = articles.filter(a => !a.url).length;
  if (indexCount) {
    indexCount.textContent = unlinked
      ? `${articles.length} entries · ${unlinked} no longer online`
      : `${articles.length} entries`;
  }

  // Group by year, newest first. Writing is listed as a dated index rather than
  // a card grid, and with 300+ entries spanning 2010–2026 the year headings are
  // what make the list navigable instead of just long.
  const byYear = new Map();
  articles.forEach(a => {
    const y = a.year || String(a.date || '').slice(0, 4) || '—';
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y).push(a);
  });

  // Every date in the index is now a real ISO value pulled from each platform's
  // own feed — "2026-09-10", or "2026-06-29" — rather than a hand-typed display
  // string. The year-group heading already carries the year, so the rail only
  // needs month and day. Two entries are only as precise as a month or a year
  // (a Refcard and a cited paper), so those widen to "Jun 2026" and "2026"
  // instead of inventing a day of the month.
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const pad = n => String(n).padStart(2, '0');
  function splitDate(raw) {
    const s = String(raw || '').trim();
    let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (m) {
      const mi = Number(m[2]) - 1;
      if (mi >= 0 && mi < 12) {
        return { short: `${MONTHS[mi]} ${Number(m[3])}`, iso: s };
      }
    }
    m = /^(\d{4})-(\d{2})$/.exec(s);
    if (m) {
      const mi = Number(m[2]) - 1;
      if (mi >= 0 && mi < 12) {
        return { short: `${MONTHS[mi]} ${m[1]}`, iso: s };
      }
    }
    // Anything unrecognised falls back to the raw string rather than a blank rail.
    return { short: s, iso: '' };
  }

  // 19 of the 257 articles were cross-posted to more than one platform. They
  // stay a single row — duplicating them would overstate the bibliography — and
  // the rail stacks every venue vertically. Stacking rather than running them
  // inline on one line is what keeps the rail column at a fixed width: three
  // venue names joined by separators is far too wide for 6.5rem.
  function platformRail(a) {
    const list = (a.platforms && a.platforms.length) ? a.platforms : [a.platform];
    return `<span class="lpc-platforms">` + list.map((p, i) =>
      `<span class="lpc-platform-name" data-venue="${p}"${i > 0 ? ' data-more="1"' : ''}>${p}</span>`
    ).join('') + `</span>`;
  }

  // One index row. 19 of the articles were cross-posted to more than one venue,
  // so the rail stacks every venue and data-platform stays a VENUE_SEP-delimited
  // list that the filters membership-test.
  //
  // A row with no url is a <div>, not an <a>: an anchor with no href is not a
  // link, it is a focusable element that does nothing when activated. The
  // `lpc-gone` flag and the badge are what tell a reader why.
  function latestPostRow(a) {
    const { short, iso } = splitDate(a.date);
    const all = (a.platforms && a.platforms.length) ? a.platforms : [a.platform];
    const venues = all.join(VENUE_SEP);
    const inner =
      `<time class="lpc-date"${iso ? ` datetime="${iso}"` : ''}>${short}</time>
      <span class="lpc-main"><span class="lpc-title">${a.title}</span>${a.summary ? `<span class="lpc-summary">${a.summary}</span>` : ''}</span>
      ${platformRail(a)}`;
    const gone = a.legacy && !a.url
      ? '<span class="lpc-gone" title="Removed from DZone with no archived copy"><i class="fas fa-box-archive"></i> Offline</span>'
      : '';
    if (!a.url) {
      return `<div class="latest-post-card is-unlinked lpc-gone-row" data-platform="${venues}" data-unlinked="1">
      ${inner}${gone}
    </div>`;
    }
    return `<a href="${a.url}" target="_blank" rel="noopener" class="latest-post-card" data-platform="${venues}">
      ${inner}
    </a>`;
  }

  // Bands are built from byYear, so a year with no articles simply produces no
  // section. Every year in the corpus falls inside a band, so `loose` stays
  // empty; it exists so an unexpected year surfaces visibly instead of being
  // dropped on the floor.
  const years = [...byYear.entries()]
    .sort((x, y) => Number(y[0]) - Number(x[0]));
  const loose = [];
  const bands = ERAS.map(era => ({ era, years: [] }));
  years.forEach(([year, list]) => {
    const era = eraForYear(year);
    if (!era) { loose.push([year, list]); return; }
    bands.find(b => b.era === era).years.push([year, list]);
  });

  const yearSection = ([year, list]) => {
    const items = list.map(a => latestPostRow(a)).join('');
    const n = list.length;
    return `<section class="year-group" id="year-${year}" data-year="${year}">
      <h3 class="year-head"><span class="year-num">${year}</span><span class="year-rule"></span><span class="year-count">${n} article${n === 1 ? '' : 's'}</span></h3>
      ${items}
    </section>`;
  };

  const bandSection = ({ era, years: ys }) => {
    const n = ys.reduce((t, [, l]) => t + l.length, 0);
    const span = era.from === era.to ? String(era.from) : `${era.from}–${era.to}`;
    return `<section class="era-band" id="era-${era.id}" data-era="${era.id}" data-era-body="era-body-${era.id}">
      <button type="button" class="era-head" aria-expanded="true" aria-controls="era-body-${era.id}">
        <span class="era-chevron" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>
        <span class="era-text">
          <span class="era-label">${era.label}</span>
          <span class="era-blurb">${era.blurb}</span>
        </span>
        <span class="era-meta"><span class="era-span">${span}</span><span class="era-count">${n} article${n === 1 ? '' : 's'}</span></span>
      </button>
      <div class="era-body" id="era-body-${era.id}">${ys.map(yearSection).join('')}</div>
    </section>`;
  };

  grid.className = 'article-index';
  grid.innerHTML = bands.filter(b => b.years.length).map(bandSection).join('')
    + loose.map(yearSection).join('');
  initEraToggles();
  initYearRail();
  initDensityToggle();

  // Announce that the rows now exist. site.js runs before this one (both are
  // deferred, in document order), so anything it needs a row count for has to
  // wait for this signal rather than measuring an empty container.
  window.dispatchEvent(new CustomEvent('index:rendered'));
}

// Each era collapses independently. The bands hold very different amounts --
// 79 entries in the earliest, 143 in the middle -- so a reader looking for
// something from 2012 should not have to scroll past 143 rows to get there.
// Collapsed state is remembered per band, and the button carries aria-expanded
// so the state is not visual-only.
const ERA_KEY = 'vm-era-open';
function initEraToggles() {
  const saved = (() => { try { return JSON.parse(localStorage.getItem(ERA_KEY) || 'null'); } catch (e) { return null; } })();
  const heads = document.querySelectorAll('.era-head');
  if (!heads.length) return;

  function apply(band, open, persist) {
    const body = document.getElementById(band.dataset.eraBody);
    const head = band.querySelector('.era-head');
    if (!body || !head) return;
    band.classList.toggle('is-collapsed', !open);
    head.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (persist) {
      let next = {};
      try { next = JSON.parse(localStorage.getItem(ERA_KEY) || '{}'); } catch (e) { next = {}; }
      next[band.dataset.era] = open;
      try { localStorage.setItem(ERA_KEY, JSON.stringify(next)); } catch (e) {}
    }
  }

  heads.forEach(head => {
    const band = head.closest('.era-band');
    const id = band.dataset.era;
    apply(band, saved && saved[id] === false ? false : true, false);
    head.addEventListener('click', function () {
      apply(band, band.classList.contains('is-collapsed'), true);
    });
  });
}

// The year rail is a flat list of every year in the index, in one horizontal
// strip. With 17 year headings and 300+ rows, scrolling was the only way to move
// between them; the rail turns that into one click. It reflects the *current*
// filter, so picking a platform narrows the rail too rather than leaving dead
// year links behind.
function initYearRail() {
  const rail = document.getElementById('yearRail');
  if (!rail) return;
  const grid = document.getElementById('latestPostsGrid');
  const links = new Map();

  function build() {
    links.clear();
    const groups = Array.from(grid.querySelectorAll('.year-group'));
    rail.innerHTML = groups.map(g => {
      const year = g.dataset.year;
      const live = g.querySelectorAll('.latest-post-card:not([hidden])').length;
      return `<a href="#year-${year}" class="year-pip" data-year="${year}" data-live="${live}"><span class="year-pip-num">${year}</span><span class="year-pip-n">${live}</span></a>`;
    }).join('');
    groups.forEach(g => links.set(g.dataset.year, rail.querySelector(`.year-pip[data-year="${g.dataset.year}"]`)));
    markActive(currentYear);
  }

  // Scrollspy: the year whose heading is nearest the top of the viewport wins.
  let currentYear = null;
  function markActive(year) {
    if (currentYear === year) return;
    currentYear = year;
    links.forEach((el, y) => el && el.classList.toggle('is-active', y === year));
    const el = links.get(year);
    if (el && rail.scrollWidth > rail.clientWidth) {
      // Keep the active pip in view without scrolling the page itself.
      const target = el.offsetLeft - (rail.clientWidth / 2) + (el.offsetWidth / 2);
      rail.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }

  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      const vis = entries.filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis.length) markActive(vis[0].target.dataset.year);
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    grid.querySelectorAll('.year-group').forEach(g => spy.observe(g));
  }

  build();
  // site.js rewrites row visibility on filter change; the rail has to follow.
  window.addEventListener('index:filtered', build);
}

// Comfortable shows the abstract on every row; Compact drops it and tightens the
// row. With 300+ entries the default page is ~14,000px tall, and a reader
// scanning for a specific title does not need two lines of prose per row to do
// it. The choice is remembered, because re-picking it every visit is friction.
const DENSITY_KEY = 'vm-index-density';
function initDensityToggle() {
  const btns = document.querySelectorAll('[data-density]');
  if (!btns.length) return;
  const saved = (() => { try { return localStorage.getItem(DENSITY_KEY); } catch (e) { return null; } })();
  if (saved === 'compact' || saved === 'comfortable') setDensity(saved);
  else setDensity('comfortable');

  function setDensity(mode) {
    document.documentElement.dataset.indexDensity = mode;
    btns.forEach(b => {
      const on = b.dataset.density === mode;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    try { localStorage.setItem(DENSITY_KEY, mode); } catch (e) {}
  }

  btns.forEach(b => b.addEventListener('click', () => setDensity(b.dataset.density)));
}

if (document.getElementById('publicationsGrid')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
} else if (document.getElementById('latestPostsGrid')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLatestPosts);
  } else {
    initLatestPosts();
  }
}
