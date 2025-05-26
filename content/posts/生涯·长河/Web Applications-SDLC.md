---
title: Web Applications-SDLC and Design Principles
date: 2025-05-26
tags:
  - MISY350
---
> [!example]+ Plan-driven and agile SDLC processes
> - Plan-driven SDLC processes are processes where all of the process activities are planned in advance and progress is measured against this plan.
> - In agile processes, planning is incremental and it is easier to change the process to reflect changing customer requirements.
> - In practice, most practical processes include elements of both plan-driven and agile approaches.
> - There are no right or wrong software processes.

> [!example]+ Software process models
> - **The waterfall model**
>     - Plan-driven model. Separate and distinct phases of specification and development.
> - **Incremental development**
>     - Specification, development and validation are interleaved. May be plan-driven or agile.
> - **Reuse-oriented software engineering**
>     - The system is assembled from existing components. May be plan-driven or agile.
> - In practice, most large systems are developed using a process that incorporates elements from all of these models.  

# Plan-driven: The waterfall model  
![[Pasted image 20250526130142.png|825]]  
Waterfall model phases
- The waterfall model is mostly used for large systems engineering projects where a system is developed at several sites.
	- In those circumstances, the plan-driven nature of the waterfall model helps <mark style="background: #FF5582A6;">coordinate the work</mark>.
- The main drawback of the waterfall model is the difficulty of accommodating change after the process is underway. In principle, a phase has to be complete before moving onto the next phase.

# Agile: Incremental development  
<mark style="background: #D2B3FFA6;">Incremental development benefits</mark>
- The cost of accommodating changing customer requirements is reduced.
    - The amount of analysis and documentation that has to be redone is much less than is required with the waterfall model.
- It is easier to get customer feedback on the development work that has been done.
    - Customers can comment on demonstrations of the software and see how much has been implemented.
- More rapid delivery and deployment of useful software to the customer is possible.
    - Customers are able to use and gain value from the software earlier than is possible with a waterfall process.
<mark style="background: #D2B3FFA6;">Incremental development problems</mark>
- The process is not visible.
    - Managers need regular deliverables to measure progress. If systems are developed quickly, it is not cost-effective to produce documents that reflect every version of the system.
- System structure tends to degrade as new increments are added.
    - Unless time and money is spent on refactoring to improve the software, regular change tends to corrupt its structure. Incorporating further software changes becomes increasingly difficult and costly.

---  

> [!summary]+ SDLC Activities: Software Analysis
> - The process of establishing what services/functions are required and the constraints on the system’s operation and development.
> - Requirements engineering process
>     - <mark style="background: #FFB86CA6;">Feasibility study</mark>
>         - Is it technically and financially feasible to build the system?
>     - <mark style="background: #FFB86CA6;">Requirements elicitation and analysis</mark>
>         - What do the system stakeholders require or expect from the system?
>     - <mark style="background: #FFB86CA6;">Requirements specification</mark>
>         - Defining the requirements in detail
>     - <mark style="background: #FFB86CA6;">Requirements validation</mark>
>         - Checking the validity of the requirements  

> [!summary]+ Develop Use Cases for Functional Requirements
> - A use case diagram is used to provide an overview of functional requirements
> - A use case diagram includes use cases (ellipses), actors (stick figures), and associations (links).  
> - Reference: [UML Use Case Diagrams: An Agile Introduction](https://agilemodeling.com/artifacts/useCaseDiagram.htm)
![[Pasted image 20250526131109.png|550]]

> [!summary]+ Software design and implementation
> - The process of converting the system specification into an executable system.
> - Software design
>     - Design a software structure that realises the specification;
> - Implementation
>     - Translate this structure into an executable program;
> - The activities of design and implementation are closely related and may be inter-leaved.  
> - A general model of the design process  
> ![[Pasted image 20250526131404.png|600]]  

> [!summary]+ Form Use Cases to Wireframing
> - Create a sitemap  
> - For each page, use wireframing to provide a design blueprint  
> ![[Pasted image 20250526131546.png|525]]  


# Wireframing Practices and Principles

## Wireframing Practices and Principles – Low Fidelity Vs. High Fidelity

### Low Fidelity

**Basic Functional and Low Visual Fidelity:**
- Types of page elements used (e.g., navigation bars, tabs, dropdowns)
- Page content (e.g., links, text, graphics)
- General locations of page content
- Static pages
- Sketchy look and feel
### High Fidelity  

**High Visual Fidelity and Dynamic Features**
- Exact locations and spacing of page elements
- Design Elements and Color Scheme
- Variables and Interactive Features (e.g. type-ahead, dynamic panels, passwords)

**As a design progresses the focus shifts from basic functionality to visual fidelity and dynamic features.**


**Increasing Wireframe Complexity** →

| Requirements & Early Design                                                                                                                                                                                                                           | Detailed Design and Revision                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the early stages of a page design you should focus primarily on application functionality with a **low fidelity wireframe**.  <br>This allows you to get agreement on general page goals without getting bogged down with specific visual details. | As you move into detailed design you should gradually increase the interactive features and add visual fidelity.  <br>This allows you to highlight unique features of the application. Visual detail can be added to existing functionality focused wireframes. |
## Benefits of Wireframing

### Why should wireframing be utilized?

<mark style="background: #FF5582A6;">1. Improves Visual Representation of Website or Application</mark>
- <mark style="background: #019C74;">Spreadsheets → Visual Sketches</mark>
- Stakeholders are able to see functionality and not just read about it
- Enables clearer communication by reducing the ambiguity of requirements

<mark style="background: #FF5582A6;">2. Increases Efficiency in Website or Application Development</mark>
- <mark style="background: #019C74;">Code → Wireframe</mark>
- Allows for quick changes that accommodate modifications large or small
- Minimizes the number of change requests during stakeholder discussions due to greater mutual understanding
- Allows for frequent demonstrations of functioning models

<mark style="background: #FF5582A6;">3. Accelerates User Engagement</mark>
- （图示中不同颜色小人集合 → 大量人群图示）
- Brings in non-technical stakeholders/users early on in design process to guide business decisions
- Promotes collaboration and improves requirements elicitation


