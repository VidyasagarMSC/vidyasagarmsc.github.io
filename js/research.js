// ============================================
// RESEARCH DATA
// ============================================
const researchData = {
  articles: [
    { id: 69, title: "Code Review Core Practices", platform: "DZone", year: 2026, date: "Jun 29, 2026", topics: ["DevOps", "Architecture", "Security"], url: "https://dzone.com/refcardz/code-review-patterns-and-anti-patterns", summary: "Refcard #291 — Practical guidance for human, automated, and AI-assisted code review workflows. Covers how to prepare reviewable PRs, use automated checks, apply human judgment, and incorporate AI assistance." },
    { id: 70, title: "No VIP? No Problem: Pacemaker-Based SAP HANA High Availability Using a Load Balancer Health Check", platform: "DZone", year: 2026, date: "Jun 25, 2026", topics: ["Cloud", "DevOps", "Architecture"], url: "https://dzone.com/articles/sap-hana-ha-pacemaker", views: "732", readingTime: "8 min", summary: "Many cloud platforms do not support floating virtual IPs, which breaks the standard RHEL Pacemaker setup for SAP HANA HA. Use a network load balancer." },
    { id: 1, title: "Open-Source LLM Tools Worth Your Time", platform: "DZone", year: 2026, date: "Apr 28, 2026", topics: ["AI", "Open Source"], url: "https://dzone.com/authors/vidyasagarmsc", views: "3.6K", readingTime: "8 min", summary: "Building with LLMs in 2026 means more than picking a model and calling an API. Covers the full open-source LLM tooling stack." },
    { id: 2, title: "MCP vs Skills vs Agents With Scripts: Which One Should You Pick?", platform: "DZone", year: 2026, date: "Mar 26, 2026", topics: ["AI", "Architecture", "DevOps"], url: "https://dzone.com/authors/vidyasagarmsc", views: "3.7K", readingTime: "10 min", summary: "Learn about when to use MCP, skills, and agents with scripts. How they differ and what they're meant for." },
    { id: 75, title: "Shipping Production-Grade AI Agents", platform: "DZone", year: 2026, date: "2026", topics: ["AI", "DevOps", "Security"], url: "https://dzone.com/refcardz/shipping-production-grade-ai-agents", summary: "Refcard #403 — Practical guidance for shipping reliable AI agents with guardrails, eval gates, secure config, deployment workflows, monitoring, and cost controls." },
    { id: 76, title: "AI Infrastructure: Compute, Storage, Observability, Security, and More", platform: "DZone", year: 2025, date: "Oct 13, 2025", topics: ["AI", "Cloud", "Infrastructure"], url: "https://dzone.com/authors/vidyasagarmsc", views: "2.4K", readingTime: "10 min", summary: "Learn about AI infrastructure compute, storage, observability, optimization, security, and deployment architecture." },
    { id: 77, title: "AI Infrastructure Guide: Tools, Frameworks, and Architecture Flows", platform: "DZone", year: 2025, date: "Oct 2, 2025", topics: ["AI", "Cloud", "Architecture"], url: "https://dzone.com/authors/vidyasagarmsc", views: "4.0K", readingTime: "10 min", summary: "Covers AI infrastructure, from hardware acceleration and model serving to monitoring and security, with tools, patterns, and strategies proven in production." },
    { id: 78, title: "Secure Private Connectivity Between VMware and Object Storage: An Enterprise Architecture Guide", platform: "DZone", year: 2025, date: "Aug 13, 2025", topics: ["Cloud", "Security", "Architecture"], url: "https://dzone.com/authors/vidyasagarmsc", views: "2.3K", readingTime: "8 min", summary: "Details how to establish secure private connectivity between VMware and Object Storage using Cloud Service Endpoints." },
    { id: 79, title: "Advanced SSL Certificate Troubleshooting for Windows: Chain of Trust, Debugging, and Best Practices", platform: "DZone", year: 2025, date: "Jul 15, 2025", topics: ["Security", "Windows"], url: "https://dzone.com/authors/vidyasagarmsc", views: "3.5K", readingTime: "8 min", summary: "SSL/TLS certificates are foundational to secure communications. Windows environments present unique challenges that go beyond basics." },
    { id: 80, title: "Modern Data Processing Libraries: Beyond Pandas", platform: "DZone", year: 2025, date: "Mar 3, 2025", topics: ["Python", "Data Science"], url: "https://dzone.com/authors/vidyasagarmsc", views: "6.5K", readingTime: "8 min", summary: "Explore the alternatives to pandas for data processing and data analysis, comparing and contrasting performance across libraries." },
    { id: 81, title: "A Comprehensive Guide to IAM in Object Storage", platform: "DZone", year: 2025, date: "Feb 25, 2025", topics: ["Cloud", "Security", "Architecture"], url: "https://dzone.com/authors/vidyasagarmsc", views: "5.5K", readingTime: "8 min", summary: "Learn about identity access management, service IDs, service credentials, and their role in securing access to object storage." },
    { id: 82, title: "Logfire: Uncomplicated Observability for Python Applications", platform: "DZone", year: 2025, date: "Feb 11, 2025", topics: ["Python", "Observability", "DevOps"], url: "https://dzone.com/authors/vidyasagarmsc", views: "5.5K", readingTime: "8 min", summary: "Logfire is an observability platform designed to provide developers with powerful insights into their Python applications." },
    { id: 83, title: "Pydantic: Simplifying Data Validation in Python", platform: "DZone", year: 2025, date: "Feb 3, 2025", topics: ["Python", "DevOps", "Tools"], url: "https://dzone.com/authors/vidyasagarmsc", views: "3.3K", readingTime: "8 min", summary: "Pydantic is a powerful Python library that uses type annotations to validate data structures with code examples." },
    { id: 84, title: "Top Tools for Object Storage and Data Management", platform: "DZone", year: 2025, date: "Jan 27, 2025", topics: ["Cloud", "DevOps", "Tools"], url: "https://dzone.com/authors/vidyasagarmsc", views: "5.5K", readingTime: "8 min", summary: "The best tools for object storage, including MinIO, Cyberduck, and more, to efficiently manage and store unstructured data." },
    { id: 85, title: "Mastering Secure Connections: A Comprehensive Guide to Accessing Sybase Databases From macOS", platform: "DZone", year: 2024, date: "Nov 27, 2024", topics: ["Security", "DevOps", "Tools"], url: "https://dzone.com/authors/vidyasagarmsc", views: "2.4K", readingTime: "8 min", summary: "Step-by-step guide for configuring SSL and securely connecting to Sybase databases from macOS with tools like DataGrip." },
    { id: 3, title: "The Ultimate Terminal Stack in 2026", platform: "Medium", year: 2026, date: "Mar 06, 2026", topics: ["DevOps", "Tools"], url: "https://medium.com/vmacwrites/the-ultimate-terminal-stack-in-2026-a-cross-platform-guide-for-macos-linux-and-windows-c0d1f93cd9cc", views: "3.5K", readingTime: "6 min", summary: "A cross-platform guide for macOS, Linux, and Windows terminal setup." },
    { id: 4, title: "From MkDocs 1.6 to Zensical — Why I Made the Move", platform: "Medium", year: 2026, date: "May 08, 2026", topics: ["DevOps", "Tools", "Documentation"], url: "https://medium.com/vmacwrites/from-mkdocs-1-6-to-zensical-heres-why-i-finally-made-the-move-53b273b49cdd", views: "1.2K", readingTime: "5 min", summary: "A warning message in my terminal completely changed how I think about documentation." },
    { id: 5, title: "Database Evolution: From RDBMS to AI-Native and Quantum-Ready Systems", platform: "Hackernoon", year: 2026, date: "Jan 12, 2026", topics: ["AI", "Quantum", "Architecture", "Cloud"], url: "https://hackernoon.com/database-evolution-from-traditional-rdbms-to-ai-native-and-quantum-ready-systems", views: "4.5K", readingTime: "12 min", summary: "Analysis of database evolution from traditional RDBMS to AI-native and quantum-ready systems." },
    { id: 6, title: "Quantum Security Governance: Framework for the Post-Quantum World", platform: "Hackernoon", year: 2025, date: "Dec 19, 2025", topics: ["Quantum", "Security", "Architecture"], url: "https://hackernoon.com/quantum-security-governance-building-a-framework-for-the-post-quantum-world", views: "3.8K", readingTime: "10 min", summary: "A framework for quantum security governance in preparation for post-quantum computing." },
    { id: 8, title: "Beyond Data: The Rising Need for AI Security", platform: "Hackernoon", year: 2025, date: "Nov 04, 2025", topics: ["AI", "Security"], url: "https://hackernoon.com/beyond-data-the-rising-need-for-ai-security", views: "5.1K", readingTime: "8 min", summary: "Exploring the critical need for security in AI-driven data ecosystems." },
    { id: 9, title: "Finding Today's Changed Files: A Quick Python Script", platform: "Dev.to", year: 2025, date: "Nov 03, 2025", topics: ["Python", "DevOps", "Tools"], url: "https://dev.to/vidyasagarmsc/finding-todays-changed-files-a-quick-python-script-for-file-uploads-13b7", views: "850", readingTime: "4 min", summary: "Python script to find and upload only today's changed files." },
    { id: 10, title: "Understanding HSTS: The Backbone of Modern Web Security", platform: "Hackernoon", year: 2025, date: "Oct 06, 2025", topics: ["Security", "Architecture"], url: "https://hackernoon.com/understanding-hsts-the-backbone-of-modern-web-security", views: "2.3K", readingTime: "6 min", summary: "Deep dive into HTTP Strict Transport Security and web security architecture." },
    { id: 11, title: "Reflecting on My 2025 Journey", platform: "VMacWrites", year: 2025, date: "Nov 18, 2025", topics: ["Developer Advocacy", "Career"], url: "https://vmacwrites.wordpress.com/2025/11/19/reflecting-on-my-2025-journey-a-year-of-innovation-learning-and-technical-excellence/", views: "1.5K", readingTime: "5 min", summary: "Reflecting on a year of innovation, learning, and technical excellence." },
    { id: 12, title: "Resolving Secrets Manager DNS Errors in Terraform & Pulumi", platform: "Medium", year: 2025, date: "Aug 08, 2025", topics: ["Cloud", "DevOps", "Architecture"], url: "https://medium.com/vmacwrites/resolving-ibm-secrets-manager-dns-resolution-errors-in-terraform-and-pulumi-iac-631a90d47b7c", views: "1.8K", readingTime: "7 min", summary: "Resolving IBM Secrets Manager DNS resolution errors in IaC." },
    { id: 13, title: "Troubleshooting SSL: Why Your SSL Certificate Isn't Working on Windows", platform: "Hackernoon", year: 2025, date: "Jun 13, 2025", topics: ["Security", "Windows"], url: "https://hackernoon.com/troubleshooting-ssl-why-your-ssl-certificate-isnt-working-on-windows", views: "5.2K", readingTime: "6 min", summary: "Advanced SSL certificate troubleshooting on Windows environments." },
    { id: 15, title: "The Essential Role of Process Monitoring in Linux", platform: "Medium", year: 2025, date: "May 12, 2025", topics: ["Linux", "DevOps", "Observability"], url: "https://medium.com/vmacwrites/the-essential-role-of-process-monitoring-scripts-in-linux-environments-50d6a241f924", views: "1.1K", readingTime: "5 min", summary: "Critical process monitoring scripts for Linux environments." },
    { id: 16, title: "Podman: Detailed Overview, Advantages, and Setup", platform: "Dev.to", year: 2025, date: "May 04, 2025", topics: ["Containers", "DevOps", "Open Source"], url: "https://dev.to/vidyasagarmsc/podman-detailed-overview-advantages-disadvantages-and-setup-31gg", views: "3.2K", readingTime: "8 min", summary: "Podman is a daemonless container engine for OCI containers and pods." },
    { id: 18, title: "S3cmd: CLI for Object Storage", platform: "Medium", year: 2025, date: "Mar 05, 2025", topics: ["Cloud", "DevOps", "Tools"], url: "https://medium.com/vmacwrites/s3cmd-cli-for-object-storage-87a02e4b300b", views: "900", readingTime: "4 min", summary: "Exploring S3cmd CLI for object storage management." },
    { id: 19, title: "An Introduction to SymPy: Symbolic Mathematics in Python", platform: "Medium", year: 2025, date: "Jan 06, 2025", topics: ["Python", "Mathematics", "AI"], url: "https://medium.com/vmacwrites/an-introduction-to-sympy-a-python-library-for-symbolic-mathematics-ad13e70d5591", views: "1.3K", readingTime: "5 min", summary: "SymPy is an open-source Python library for symbolic mathematics." },
    { id: 20, title: "Pandas: Conversion using loc and iloc", platform: "Medium", year: 2025, date: "Jan 01, 2025", topics: ["Python", "Data Science"], url: "https://medium.com/vmacwrites/pandas-conversion-using-loc-and-iloc-d89d16010b49", views: "1.6K", readingTime: "3 min", summary: "Understanding loc and iloc for data selection in Pandas." },
    { id: 21, title: "Nvidia MIG with GPU Optimization in Kubernetes", platform: "Medium", year: 2024, date: "Dec 07, 2024", topics: ["AI", "Kubernetes", "Cloud"], url: "https://medium.com/vmacwrites/nvidia-mig-with-gpu-optimization-in-kubernetes-09a321b78993", views: "2.5K", readingTime: "8 min", summary: "Multi-Instance GPU partitioning for Kubernetes workloads." },
    { id: 22, title: "Model Context Protocol (MCP) Overview", platform: "Medium", year: 2024, date: "Dec 01, 2024", topics: ["AI", "Architecture", "Open Source"], url: "https://medium.com/vmacwrites/model-context-protocol-overview-5a15a57e69c4", views: "3.6K", readingTime: "5 min", summary: "Anthropic's MCP standard for AI-to-data-source connections." },
    { id: 23, title: "Reflecting on My 2024 Journey", platform: "VMacWrites", year: 2024, date: "Dec 08, 2024", topics: ["Developer Advocacy", "Career"], url: "https://vmacwrites.wordpress.com/2024/12/08/reflecting-on-my-2024-journey-achievements-and-growth/", views: "1.2K", readingTime: "5 min", summary: "Celebrating achievements, certifications, and community impact in 2024." },
    { id: 24, title: "Nurturing the Developer Within", platform: "Dev.to", year: 2024, date: "Dec 01, 2024", topics: ["Developer Advocacy", "Career"], url: "https://dev.to/vidyasagarmsc/nurturing-the-developer-within-a-journey-of-growth-and-2n9o", views: "1.8K", readingTime: "4 min", summary: "Keeping the developer inside you alive in the evolving tech landscape." },
    { id: 25, title: "IceCream: Sweet Alternative to Print Debugging in Python", platform: "Dev.to", year: 2024, date: "Nov 20, 2024", topics: ["Python", "DevOps", "Tools"], url: "https://dev.to/vidyasagarmsc/icecream-a-sweet-alternative-to-print-debugging-in-python-1lhg", views: "2.1K", readingTime: "3 min", summary: "IceCream Python library makes debugging effortless." },
    { id: 26, title: "Chain of Trust: Decoding SSL Certificate Security", platform: "Medium", year: 2024, date: "Nov 18, 2024", topics: ["Security", "Architecture"], url: "https://medium.com/vmacwrites/chain-of-trust-decoding-ssl-certificate-security-architecture-2bde46655d37", views: "1.4K", readingTime: "7 min", summary: "SSL certificate chain of trust and security architecture." },
    { id: 27, title: "Shingling in the Generative AI Era", platform: "Hackernoon", year: 2024, date: "Jul 23, 2024", topics: ["AI", "Data Science"], url: "https://hackernoon.com/shingling-in-the-generative-ai-era", views: "2.8K", readingTime: "6 min", summary: "Shingling techniques and applications in generative AI." },
    { id: 28, title: "How to Deploy RAPIDS on GPU-Enabled Private Cloud", platform: "Hackernoon", year: 2024, date: "May 24, 2024", topics: ["AI", "Cloud", "GPU"], url: "https://hackernoon.com/how-to-deploy-rapids-on-gpu-enabled-private-cloud", views: "3.1K", readingTime: "8 min", summary: "Deploying RAPIDS for GPU-accelerated data science on private cloud." },
    { id: 29, title: "Design Private & Secured Cloud Networking with Automation", platform: "Hackernoon", year: 2024, date: "May 23, 2024", topics: ["Cloud", "Security", "Architecture"], url: "https://hackernoon.com/design-and-deploy-a-completely-private-and-secured-networking-architecture-on-cloud-using-automation", views: "2.6K", readingTime: "10 min", summary: "Design and deploy private secured networking architecture on cloud." },
    { id: 30, title: "Essential Math to Master AI and Quantum", platform: "DZone", year: 2024, date: "Apr 16, 2024", topics: ["AI", "Quantum", "Mathematics"], url: "https://dzone.com/authors/vidyasagarmsc", views: "5.2K", readingTime: "10 min", summary: "Fundamental mathematics for artificial intelligence and quantum computing." },
    { id: 31, title: "Securing the Generative AI Frontier", platform: "DZone", year: 2024, date: "May 3, 2024", topics: ["AI", "Security"], url: "https://dzone.com/authors/vidyasagarmsc", views: "3.7K", readingTime: "8 min", summary: "Specialized tools and frameworks for AI firewall and prompt inspection." },
    { id: 34, title: "2023: A Year in Retrospective", platform: "VMacWrites", year: 2023, date: "Dec 16, 2023", topics: ["Developer Advocacy", "Career"], url: "https://vmacwrites.wordpress.com/2023/12/16/2023-a-year-in-retrospective/", views: "800", readingTime: "4 min", summary: "Reflecting on a year of learning, exploration, and community." },
    { id: 35, title: "Ansible Code Snippets for Automation", platform: "VMacWrites", year: 2023, date: "Jul 01, 2023", topics: ["DevOps", "Cloud", "Automation"], url: "https://vmacwrites.wordpress.com/2023/07/01/ansible-code-snippets-for-automation/", views: "650", readingTime: "3 min", summary: "Ansible automation code snippets for Cloud provisioning." },
    { id: 37, title: "Container to Container Communication with Bridge Network", platform: "VMacWrites", year: 2020, date: "Apr 09, 2020", topics: ["Containers", "Networking"], url: "https://vmacwrites.wordpress.com/2020/04/09/container-to-container-communication-with-bridge-network/", views: "1.1K", readingTime: "5 min", summary: "Establish container-to-container communication via bridge network." },
    { id: 38, title: "Container Registry Unauthorized: Authentication Required", platform: "VMacWrites", year: 2019, date: "Apr 05, 2019", topics: ["Containers", "Cloud"], url: "https://vmacwrites.wordpress.com/2019/04/05/icr-io-unauthorized-authentication-required/", views: "950", readingTime: "4 min", summary: "Troubleshooting ICR authentication errors on IKS." },
    { id: 39, title: "Istio on Windows 10", platform: "VMacWrites", year: 2019, date: "Feb 06, 2019", topics: ["Containers", "Service Mesh", "DevOps"], url: "https://vmacwrites.wordpress.com/2019/02/06/istio-on-windows-10/", views: "2.5K", readingTime: "6 min", summary: "Setting up Istio service mesh on Windows 10." },
    { id: 40, title: "Create a Presigned URL in Python 3.x", platform: "VMacWrites", year: 2018, date: "Nov 05, 2018", topics: ["Python", "Cloud"], url: "https://vmacwrites.wordpress.com/2018/11/05/create-a-presigned-url-to-download-an-object-in-python-3-x/", views: "1.3K", readingTime: "4 min", summary: "Presigned URLs for temporary object storage access." },
    { id: 41, title: "Install Knative with Istio on IBM Cloud", platform: "VMacWrites", year: 2018, date: "Oct 09, 2018", topics: ["Containers", "Cloud", "Serverless"], url: "https://vmacwrites.wordpress.com/2018/10/09/install-knative-with-istio-on-ibm-cloud/", views: "1.6K", readingTime: "8 min", summary: "Step-by-step Knative installation with Istio on IKS." },
    { id: 42, title: "Adjust the Speaking Rate", platform: "VMacWrites", year: 2020, date: "Nov 09, 2020", topics: ["AI", "NLP"], url: "https://vmacwrites.wordpress.com/2020/11/09/adjust-the-speaking-rate/", views: "750", readingTime: "3 min", summary: "StackOverflow-inspired solution for adjusting text-to-speech rate." },
    { id: 43, title: "Windows 10 Development Recipes", platform: "Featured", year: 2015, date: "2015", topics: ["Architecture", "Windows", "Software Engineering"], url: "https://www.apress.com/gp/book/9781484207202", isBook: true, summary: "A comprehensive problem-solution reference for Windows 10 apps using HTML and JavaScript.", citations: 1, isbn: "978-1-4842-0720-2" },
    { id: 44, title: "Who's Speaking?: Speaker Diarization with Watson", platform: "Featured", year: 2017, date: "May 2017", topics: ["AI", "NLP", "Cloud"], url: "https://medium.com/@VidyasagarMSC", summary: "Implementing speaker diarization using IBM Watson Speech-to-Text API.", citations: 3, isFeatured: true },
    { id: 46, title: "Trust No Agent: How to Secure Autonomous Tools on Your Machine", platform: "DZone", year: 2026, date: "Feb 17, 2026", topics: ["AI", "Security"], url: "https://dzone.com/authors/vidyasagarmsc", views: "3.3K", readingTime: "8 min", summary: "Most developers run autonomous agents with zero isolation. Learn defense in depth to contain the blast radius." },
    { id: 47, title: "ToolOrchestra vs Mixture of Experts: Routing Intelligence at Scale", platform: "DZone", year: 2026, date: "Jan 30, 2026", topics: ["AI", "Architecture"], url: "https://dzone.com/authors/vidyasagarmsc", views: "1.8K", readingTime: "8 min", summary: "Explore ToolOrchestra, Mixture of Experts (MoE), and other AI patterns for routing intelligence at scale." },
    { id: 48, title: "Developer Tools That Actually Matter in 2026", platform: "DZone", year: 2026, date: "Jan 6, 2026", topics: ["DevOps", "Tools"], url: "https://dzone.com/authors/vidyasagarmsc", views: "7.7K", readingTime: "6 min", summary: "The developer tools making real differences today are the ones solving actual problems we face every day." },
    { id: 49, title: "Infrastructure as Code: How Automation Evolved to Power AI Workloads", platform: "DZone", year: 2025, date: "Dec 18, 2025", topics: ["Cloud", "DevOps", "AI"], url: "https://dzone.com/authors/vidyasagarmsc", views: "1.7K", readingTime: "8 min", summary: "Learn how Infrastructure as Code progressed in 2025 and helped automation for provisioning AI infrastructure." },
    { id: 50, title: "Architectural Understanding of CPUs, GPUs, and TPUs", platform: "DZone", year: 2025, date: "Dec 4, 2025", topics: ["Architecture", "AI"], url: "https://dzone.com/authors/vidyasagarmsc", views: "5.5K", readingTime: "10 min", summary: "Learn about CPUs, GPUs, and TPUs — definitions, use cases, architectural differences, and when to use each." },
    { id: 51, title: "AI Infrastructure for Agents and LLMs: Options, Tools, and Optimization", platform: "DZone", year: 2025, date: "Sep 22, 2025", topics: ["AI", "Cloud", "Infrastructure"], url: "https://dzone.com/authors/vidyasagarmsc", views: "4.6K", readingTime: "12 min", summary: "Explore infrastructure options and tools for deploying and optimizing AI agents and large language models." },
    { id: 52, title: "Cloud Automation Excellence: Terraform, Ansible, and Nomad", platform: "DZone", year: 2025, date: "Sep 9, 2025", topics: ["Cloud", "DevOps", "Architecture"], url: "https://dzone.com/authors/vidyasagarmsc", views: "5.3K", readingTime: "10 min", summary: "Enterprise cloud architecture demands sophisticated orchestration of infrastructure, configuration, and workload management." },
    { id: 53, title: "Pulumi: Modern Infrastructure as Code With Real Programming Languages", platform: "DZone", year: 2025, date: "Aug 26, 2025", topics: ["Cloud", "DevOps", "IaC"], url: "https://dzone.com/authors/vidyasagarmsc", views: "3.4K", readingTime: "8 min", summary: "Pulumi lets developers create, deploy, and manage cloud resources using familiar programming languages." },
    { id: 54, title: "DSPy Framework: A Comprehensive Technical Guide", platform: "DZone", year: 2025, date: "Aug 11, 2025", topics: ["AI", "Python"], url: "https://dzone.com/authors/vidyasagarmsc", views: "4.9K", readingTime: "10 min", summary: "DSPy improves AI development by replacing prompt engineering with patterns. Explore DSPy's features for LM applications." },
    { id: 55, title: "The Twelve-Factor Agents: Building Production-Ready LLM Applications", platform: "DZone", year: 2025, date: "Jul 17, 2025", topics: ["AI", "Architecture"], url: "https://dzone.com/authors/vidyasagarmsc", views: "5.2K", readingTime: "10 min", summary: "The Twelve-Factor Agent architectural pattern for creating robust, scalable, and maintainable LLM applications." },
    { id: 56, title: "AI Agent Architectures: Patterns, Applications, and Implementation Guide", platform: "DZone", year: 2025, date: "Jun 13, 2025", topics: ["AI", "Architecture"], url: "https://dzone.com/authors/vidyasagarmsc", views: "6.6K", readingTime: "12 min", summary: "AI agent architectures provide structural blueprints for designing intelligent systems that perceive and act." },
    { id: 57, title: "A Complete Guide to Modern AI Developer Tools", platform: "DZone", year: 2025, date: "May 9, 2025", topics: ["AI", "DevOps", "Tools"], url: "https://dzone.com/authors/vidyasagarmsc", views: "6.9K", readingTime: "10 min", summary: "Explore the most impactful AI developer tools, highlighting features, installation steps, strengths, and limitations." },
    { id: 58, title: "Emerging Data Architectures: The Future of Data Management", platform: "DZone", year: 2025, date: "Apr 15, 2025", topics: ["Architecture", "Data", "Cloud"], url: "https://dzone.com/authors/vidyasagarmsc", views: "7.9K", readingTime: "10 min", summary: "Explore the latest advancements in data architecture, focusing on LakeDB and zero ETL architectures." },
    { id: 59, title: "Ansible Security and Testing Tools for Automation", platform: "DZone", year: 2025, date: "Mar 28, 2025", topics: ["DevOps", "Security"], url: "https://dzone.com/authors/vidyasagarmsc", views: "8.7K", readingTime: "8 min", summary: "Essential collection of security and testing tools for Ansible automation to reduce security risk." },
    { id: 60, title: "Observability and DevTool Platforms for AI Agents", platform: "DZone", year: 2025, date: "Feb 19, 2025", topics: ["AI", "Observability", "DevOps"], url: "https://dzone.com/authors/vidyasagarmsc", views: "16K", readingTime: "8 min", summary: "Platforms that provide developers with tools to monitor, debug, and optimize AI agents." },
    { id: 61, title: "Ansible Beyond Automation: Ecosystem and Tools", platform: "DZone", year: 2024, date: "Apr 4, 2024", topics: ["DevOps", "Automation"], url: "https://dzone.com/authors/vidyasagarmsc", views: "12.9K", readingTime: "8 min", summary: "Discover the wide range of tools and ecosystems that Ansible offers beyond automation." },
    { id: 62, title: "Understanding Prompt Injection and Other Risks of Generative AI", platform: "DZone", year: 2024, date: "Apr 2, 2024", topics: ["AI", "Security"], url: "https://dzone.com/authors/vidyasagarmsc", views: "8.8K", readingTime: "8 min", summary: "By prioritizing security, organizations can enhance trust, resilience, and reliability in AI environments." },
    { id: 63, title: "Enhance IaC Security With Mend Scans", platform: "DZone", year: 2024, date: "Jul 5, 2024", topics: ["DevOps", "Security", "IaC"], url: "https://dzone.com/authors/vidyasagarmsc", views: "12.9K", readingTime: "8 min", summary: "Learn to incorporate Mend into IaC workflows, improve infrastructure security, and ensure compliance." },
    { id: 64, title: "Shingling for Similarity and Plagiarism Detection", platform: "DZone", year: 2024, date: "Jun 25, 2024", topics: ["AI", "Data Science"], url: "https://dzone.com/authors/vidyasagarmsc", views: "6.9K", readingTime: "8 min", summary: "Introduction to shingling technique, Jaccard similarity, and advanced techniques for plagiarism detection." },
    { id: 65, title: "Ansible Code Scanning and Quality Checks With SonarQube", platform: "DZone", year: 2024, date: "Jun 12, 2024", topics: ["DevOps", "Security"], url: "https://dzone.com/authors/vidyasagarmsc", views: "8.4K", readingTime: "8 min", summary: "Set up SonarQube plugin to analyze Ansible playbooks for security vulnerabilities and technical debt." },
    { id: 66, title: "Automation, Ansible, AI: AI Tools in Your IDE", platform: "DZone", year: 2023, date: "Jun 27, 2023", topics: ["AI", "DevOps", "Automation"], url: "https://dzone.com/authors/vidyasagarmsc", views: "9.1K", readingTime: "6 min", summary: "Learn how Ansible brings AI tools to your IDE to make automation coding simpler and more efficient." },
    { id: 67, title: "From Prompts to Harnesses: How AI Engineering Has Grown Up", platform: "Hackernoon", year: 2026, date: "May 5, 2026", topics: ["AI", "Architecture"], url: "https://hackernoon.com/from-prompts-to-harnesses-how-ai-engineering-has-grown-up", views: "2.8K", readingTime: "8 min", summary: "How AI engineering has evolved from simple prompt engineering to sophisticated agent harnesses and orchestration frameworks." },
    { id: 68, title: "How I Fixed Windows Installation - BitLocker, a Write-Protected USB, and the IRST Rabbit Hole", platform: "Hackernoon", year: 2026, date: "Apr 29, 2026", topics: ["Windows", "Security", "DevOps"], url: "https://hackernoon.com/how-i-fixed-windows-installation-bitlocker-a-write-protected-usb-and-the-irst-rabbit-hole", views: "3.2K", readingTime: "10 min", summary: "A troubleshooting journey through Windows installation issues involving BitLocker, write-protected USB drives, and IRST driver problems." },
    { id: 71, title: "Understanding Quantum Optimization: A Beginner's Guide", platform: "Substack", year: 2025, date: "Nov 15, 2025", topics: ["Quantum", "Mathematics"], url: "https://vmacwrites.substack.com/p/understanding-quantum-optimization", views: "1.2K", readingTime: "15 min", summary: "How quantum computers might solve the world's hardest problems. A simplified introduction to quantum optimization, QUBO formulations, and the mathematics behind breakthrough research." },
    { id: 72, title: "Post-Quantum Cryptography: The Next Frontier in Cybersecurity", platform: "Substack", year: 2025, date: "May 26, 2025", topics: ["Security", "Quantum", "Cryptography"], url: "https://vmacwrites.substack.com/p/post-quantum-cryptography-the-next", views: "1.5K", readingTime: "10 min", summary: "Don't wait for quantum computers to arrive. Start your post-quantum cryptography journey today." },
    { id: 73, title: "Understanding Transcendental Numbers: Their Role in Mathematics, AI, and Quantum Computing", platform: "Substack", year: 2025, date: "Mar 17, 2025", topics: ["Mathematics", "AI", "Quantum"], url: "https://vmacwrites.substack.com/p/understanding-transcendental-numbers", views: "800", readingTime: "8 min", summary: "Transcendental numbers are a class of real or complex numbers that are not algebraic. Explore their role in mathematics, AI, and quantum computing." },
    { id: 74, title: "Generate Your Next Headshot", platform: "Substack", year: 2024, date: "Jun 12, 2024", topics: ["AI", "Tools"], url: "https://vmacwrites.substack.com/p/generate-your-next-headshot", views: "600", readingTime: "3 min", summary: "Free professional photoshoot with AI — generate your next headshot using AI tools." }
  ],
  platforms: [
    { name: "DZone", icon: "DZ", color: "#e34c26", stat: "609.3K", label: "Total pageviews · 101 articles", url: "https://dzone.com/authors/vidyasagarmsc" },
    { name: "Medium", icon: "M", color: "#000", stat: "652", label: "Followers", url: "https://medium.com/@VidyasagarMSC" },
    { name: "Dev.to", icon: "<i class='fab fa-dev'></i>", color: "#0a0a0a", stat: "60K+", label: "Total views · 45+ posts", url: "https://dev.to/vidyasagarmsc" },
    { name: "Hackernoon", icon: "HN", color: "#00ff7f", stat: "Top Writer", label: "Cybersecurity · 2025–2026", url: "https://hackernoon.com/u/vidyasagarmsc" },
    { name: "Substack", icon: "S", color: "#ff671e", stat: "500+", label: "Subscribers", url: "https://vmacwrites.substack.com" },
    { name: "VMacWrites", icon: "W", color: "#21759b", stat: "350+", label: "Posts dating back to 2018", url: "https://vmacwrites.wordpress.com" },
    { name: "GitHub", icon: "<i class='fab fa-github'></i>", color: "#333", stat: "15+", label: "Public repositories", url: "https://github.com/VidyasagarMSC" },
    { name: "Google Scholar", icon: "<i class='fas fa-graduation-cap'></i>", color: "#4285f4", stat: "33", label: "Citations", url: "https://scholar.google.com/citations?user=dbcWkvwAAAAJ" }
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

// ============================================
// RENDER FUNCTIONS
// ============================================
function getPlatformStyle(platform) {
  const c = platformColors[platform] || { bg: "#666", text: "#fff" };
  return `background:${c.bg};color:${c.text}`;
}

function getPlatformIcon(platform) {
  return ({"DZone":"fas fa-code","Medium":"fab fa-medium","Dev.to":"fab fa-dev","Hackernoon":"fab fa-hacker-news","Substack":"fas fa-envelope","VMacWrites":"fab fa-wordpress","Featured":"fas fa-star"})[platform] || "fas fa-star";
}

function renderPublicationCards(articles) {
  const grid = document.getElementById('publicationsGrid');
  if (!grid) return;
  grid.innerHTML = articles.map(a => {
    const badge = `<span class="pub-platform-badge" style="${getPlatformStyle(a.platform)}"><i class="${getPlatformIcon(a.platform)}"></i> ${a.platform}</span>`;
    const yb = `<span class="pub-year-badge"><i class="fas fa-calendar"></i> ${a.year}</span>`;
    const meta = [];
    if (a.date) meta.push(`<span><i class="fas fa-calendar-alt"></i> ${a.date}</span>`);
    if (a.views) meta.push(`<span><i class="fas fa-eye"></i> ${a.views} views</span>`);
    if (a.readingTime) meta.push(`<span><i class="fas fa-clock"></i> ${a.readingTime}</span>`);
    if (a.citations) meta.push(`<span class="cite-badge"><i class="fas fa-quote-right"></i> ${a.citations} Citation${a.citations > 1 ? 's' : ''}</span>`);
    if (a.isbn) meta.push(`<span><i class="fas fa-hashtag"></i> ISBN: ${a.isbn}</span>`);
    const tags = a.topics.map(t => `<span class="pub-tag-topic">${topicIcons[t] || ''} ${t}</span>`).join('');
    const authors = a.isBook ? `<div class="pub-authors"><strong>Vidyasagar Machupalli</strong>, A. V. Senthil Kumar, Lohith Goudagere Nagaraj</div>` : '';
    return `<div class="pub-card" data-id="${a.id}">
      <div class="pub-top">${yb} ${badge}</div>
      <h4>${a.title}</h4>
      ${authors}
      <div class="pub-meta">${meta.join('')}</div>
      <div class="pub-abstract">${a.summary}</div>
      <div class="pub-tags">${tags}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
        ${a.url && a.url !== '#' ? `<a href="${a.url}" target="_blank" class="pub-link">Read Publication <i class="fas fa-arrow-right"></i></a>` : ''}
        <button class="cite-btn" onclick="window.openCitation(${a.id})"><i class="fas fa-quote-right"></i> Cite</button>
      </div>
    </div>`;
  }).join('');
}

function renderFeaturedResearch() {
  const container = document.getElementById('featuredResearch');
  if (!container) return;
  const featured = researchData.articles.filter(a => a.isBook || a.isFeatured || a.citations);
  container.innerHTML = featured.map(a => {
    const ct = a.citations ? `<span class="pub-tag-topic"><i class="fas fa-quote-right"></i> ${a.citations} Citation${a.citations > 1 ? 's' : ''}</span>` : '';
    const tt = a.isBook ? '<span class="pub-tag-type"><i class="fas fa-book"></i> Book</span>' : '<span class="pub-tag-type"><i class="fas fa-pen"></i> Technical Article</span>';
    const tags = a.topics.map(t => `<span class="pub-tag-topic">${t}</span>`).join('');
    const authors = a.isBook ? '<div class="pub-authors"><strong>Vidyasagar Machupalli</strong>, A. V. Senthil Kumar, Lohith Goudagere Nagaraj</div>' : '<div class="pub-authors"><strong>Vidyasagar Machupalli</strong></div>';
    return `<div class="pub-card" style="border-left:4px solid var(--orange);">
      <div class="pub-top"><span class="pub-year-badge"><i class="fas fa-calendar"></i> ${a.year}</span><span class="pub-platform-badge" style="background:var(--orange);color:white;">${a.isBook ? 'Book' : 'Cited Publication'}</span></div>
      <h4>${a.title}</h4>
      ${authors}
      <div class="pub-meta"><span><i class="fas fa-building"></i> ${a.isBook ? 'Apress' : 'Medium / VMacWrites'}</span>${a.isbn ? `<span><i class="fas fa-hashtag"></i> ISBN: ${a.isbn}</span>` : ''}${a.citations ? `<span class="cite-badge"><i class="fas fa-quote-right"></i> Cited by ${a.citations}</span>` : ''}</div>
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

function getFilteredArticles() {
  let result = [...researchData.articles];
  if (activePlatform !== 'all') result = result.filter(a => a.platform === activePlatform);
  if (activeTopic !== 'all') result = result.filter(a => a.topics.includes(activeTopic));
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    result = result.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.topics.some(t => t.toLowerCase().includes(q)) ||
      a.platform.toLowerCase().includes(q)
    );
  }
  return result;
}

function updatePublications() {
  const filtered = getFilteredArticles();
  renderPublicationCards(filtered);
  const rc = document.getElementById('resultsCount');
  if (rc) rc.textContent = `Showing ${filtered.length} article${filtered.length !== 1 ? 's' : ''}`;
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
    a.summary.toLowerCase().includes(q) ||
    a.topics.some(t => t.toLowerCase().includes(q)) ||
    a.platform.toLowerCase().includes(q)
  ).slice(0, 12);

  if (results.length === 0) {
    searchResults.innerHTML = `<div class="search-empty"><i class="fas fa-search"></i><p>No results found for "${query}"</p></div>`;
  } else {
    searchResults.innerHTML = results.map(r => {
      const c = platformColors[r.platform] || { bg: "#666", text: "#fff" };
      const icon = r.isBook ? '📚' : r.platform === 'DZone' ? 'D' : r.platform === 'Medium' ? 'M' : r.platform === 'Dev.to' ? '<i class="fab fa-dev"></i>' : r.platform === 'Hackernoon' ? 'HN' : r.platform === 'Substack' ? 'S' : r.platform === 'VMacWrites' ? 'W' : '📄';
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
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
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
  const coAuthors = a.isBook ? [author, 'A. V. Senthil Kumar', 'Lohith Goudagere Nagaraj'] : [author];
  const authorList = coAuthors.join(', ');
  const year = a.year || a.date?.split(' ').pop() || 'n.d.';
  const title = a.title;
  const publisher = a.isBook ? 'Apress' : (a.platform || 'Technical Article');
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
          <div class="cite-authors">${a.isBook ? 'Vidyasagar Machupalli, A. V. Senthil Kumar, Lohith Goudagere Nagaraj' : 'Vidyasagar Machupalli'}</div>
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
    const resp = await fetch('data/citations.json');
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
    const displayVal = Math.max(1, data.metrics.total_citations);
    totalEl.textContent = displayVal;
    totalEl.dataset.target = displayVal;
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

function initLatestPosts() {
  const grid = document.getElementById('latestPostsGrid');
  if (!grid) return;

  const articles = [...researchData.articles]
    .filter(a => !a.isBook && a.url && a.url !== '#')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  grid.innerHTML = articles.map(a => {
    const iconMap = { 'DZone': 'code', 'Medium': 'medium', 'Dev.to': 'dev', 'Hackernoon': 'hacker-news', 'Substack': 'envelope', 'VMacWrites': 'wordpress' };
    const icon = iconMap[a.platform] || 'star';
    const prefix = (a.platform === 'DZone' || a.platform === 'Substack') ? 'fas' : 'fab';
    const pColors = { 'DZone': '#e34c26', 'Medium': '#000', 'Dev.to': '#0a0a0a', 'Hackernoon': '#00ff7f', 'Substack': '#ff671e', 'VMacWrites': '#21759b' };
    const bg = pColors[a.platform] || '#666';
    const iconHtml = a.platform === 'Hackernoon' ? 'HN' : a.platform === 'VMacWrites' ? 'W' : a.platform === 'DZone' ? 'DZ' : `<i class="${prefix} fa-${icon}" style="font-size:0.9rem;color:#fff;"></i>`;

    return `<a href="${a.url}" target="_blank" class="latest-post-card" data-platform="${a.platform}">
      <span class="lpc-date">${a.date}</span>
      <span class="lpc-title">${a.title}</span>
      <span class="lpc-platform-name">${a.platform}</span>
    </a>`;
  }).join('');
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
