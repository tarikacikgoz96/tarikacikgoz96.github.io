---
title: Content Test Page
---

# Content Test
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

{% include image.html
   src="/test_1.png"
   alt="Test"
   width="50%" %}

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Video example (data)
{% include video.html
   src="/videos/demo.mp4"
   width="60%" %}

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Video example (youtube link)
{% include youtube.html
   id="M7lc1UVf-VE"
   width="60%" %}

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Audio example
{% include audio.html
   src="/audio/demo.mp3"
   width="70%" %}

JavaScript code-block example:
```javascript
class PortfolioManager {
    constructor() {
        this.projects = [];
        this.articles = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    addArticle(article) {
        this.articles.push(article);
    }

    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    }

    renderProjects(containerId) {
        const container = document.getElementById(containerId);

        if (!container) {
            console.error("Container not found.");
            return;
        }

        container.innerHTML = "";

        this.projects.forEach(project => {
            const card = document.createElement("div");

            card.classList.add("project-card");

            card.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.url}">
                    View Project
                </a>
            `;

            container.appendChild(card);
        });
    }

    async loadProjects() {
        try {
            const response = await fetch("/api/projects");

            if (!response.ok) {
                throw new Error("Failed to load projects.");
            }

            const data = await response.json();

            this.projects = data;
        }
        catch (error) {
            console.error(error);
        }
    }
}

const manager = new PortfolioManager();

manager.addProject({
    id: 1,
    title: "SAP ABAP Development",
    description: "Enterprise SAP solutions and custom developments.",
    url: "/projects/sap-abap"
});

manager.addProject({
    id: 2,
    title: ".NET Backend",
    description: "REST APIs and microservices.",
    url: "/projects/dotnet"
});

document.addEventListener("DOMContentLoaded", async () => {
    await manager.loadProjects();
    manager.renderProjects("projects-container");
});

window.addEventListener("resize", () => {
    console.log(`Window resized: ${window.innerWidth}px`);
});

console.log("Portfolio initialized successfully.");

```
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

ABAP code-block example:
```abap
REPORT zsales_order_report.

PARAMETERS:
  p_vkorg TYPE vbak-vkorg OBLIGATORY,
  p_erdat TYPE vbak-erdat.

TYPES: BEGIN OF ty_order,
         vbeln TYPE vbak-vbeln,
         erdat TYPE vbak-erdat,
         kunnr TYPE vbak-kunnr,
         name1 TYPE kna1-name1,
         netwr TYPE vbak-netwr,
         waerk TYPE vbak-waerk,
       END OF ty_order.

DATA:
  gt_orders TYPE TABLE OF ty_order,
  gs_order  TYPE ty_order.

SELECT
    vbak~vbeln,
    vbak~erdat,
    vbak~kunnr,
    kna1~name1,
    vbak~netwr,
    vbak~waerk
  INTO TABLE @gt_orders
  FROM vbak
  INNER JOIN kna1
    ON kna1~kunnr = vbak~kunnr
  WHERE vbak~vkorg = @p_vkorg
    AND vbak~erdat >= @p_erdat.

IF sy-subrc <> 0.
  MESSAGE 'No records found.' TYPE 'I'.
  EXIT.
ENDIF.

WRITE: / 'Sales Order Report'.
ULINE.

FORMAT COLOR COL_HEADING.
WRITE:
  / 'Document',
    20 'Date',
    35 'Customer',
    60 'Name',
    100 'Amount',
    120 'Currency'.

FORMAT COLOR OFF.

LOOP AT gt_orders INTO gs_order.

  WRITE:
    / gs_order-vbeln,
      20 gs_order-erdat,
      35 gs_order-kunnr,
      60 gs_order-name1,
      100 gs_order-netwr,
      120 gs_order-waerk.

ENDLOOP.

DATA:
  lv_total TYPE vbak-netwr.

CLEAR lv_total.

LOOP AT gt_orders INTO gs_order.
  lv_total = lv_total + gs_order-netwr.
ENDLOOP.

ULINE.

WRITE:
  / 'Total Amount:',
    lv_total.

DATA:
  lo_alv TYPE REF TO cl_salv_table.

TRY.

    cl_salv_table=>factory(
      IMPORTING
        r_salv_table = lo_alv
      CHANGING
        t_table      = gt_orders ).

    lo_alv->get_functions( )->set_all( abap_true ).

    lo_alv->get_columns( )->set_optimize( abap_true ).

    lo_alv->display( ).

  CATCH cx_salv_msg INTO DATA(lx_salv).

    MESSAGE lx_salv->get_text( ) TYPE 'E'.

ENDTRY.
```


Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    