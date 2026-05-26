---
layout: site_nav
title: Articles
---

Artiklestir ha


<div class="project-navigation">

<!-- Root level markdown files -->

{% for page in site.pages %}

    {% if page.path contains 'articles/' %}

        {% assign parts = page.path | split: "/" %}

        {% if parts.size == 2 %}

            {% unless page.name == 'index.md' %}

                <a href="{{ page.url }}">
                    - {{ page.title }}
                </a>

            {% endunless %}

        {% endif %}

    {% endif %}

{% endfor %}

<!-- Categories -->

{% assign categories = "" | split: "" %}

{% for page in site.pages %}

    {% if page.path contains 'articles/' %}

        {% assign parts = page.path | split: "/" %}

        {% if parts.size > 2 %}

            {% assign category = parts[1] %}

            {% unless categories contains category %}

                {% assign categories = categories | push: category %}

            {% endunless %}

        {% endif %}

    {% endif %}

{% endfor %}

{% for category in categories %}

    <h2>{{ category  }}</h2>

    {% for page in site.pages %}

        {% assign parts = page.path | split: "/" %}

        {% if parts.size > 2 %}

            {% if parts[1] == category %}

                <a href="{{ page.url }}">
                    - {{ page.title }}
                </a>

            {% endif %}

        {% endif %}

    {% endfor %}

{% endfor %}

</div>