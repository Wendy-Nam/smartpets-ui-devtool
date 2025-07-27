# 🧩 Smartpets UI Devtool

### 📎 [View Deployed Website](https://wendy-jmcomponents-rn.vercel.app)

| Item | Description |
|------|-------------|
| **Project Name** | Smartpets UI Devtool |
| **Technology Stack** | React Native Web + Storybook |
| **Purpose** | Testing common UI components, code generation automation, collaboration standardization |
| **Tool Development** | Building testable UI interfaces<br>Static deployment automation and visual QA environment<br>Designed as a **Frontend DevTool** usable without CI (**100% contribution**) |
| **UI Component Source** | Collaboratively created within the Capstone_FE team<br>(This repository is an **independent tool** for testing and documentation) |

---

### 👤 Maintainer  
[**Wendy-Nam (Nam Seo-ah)**](https://github.com/Wendy-Nam)

### 🧩 Related Projects  
📦 [Smartpets Capstone_FE](https://github.com/KAU-SMART-PETS/Capstone_FE/tree/main)

> This is a separate tool for UI testing and collaboration standardization for the Smartpets project.  
> I independently designed and implemented the entire process from Storybook configuration to interface composition and static deployment.

---

## 🎯 Purpose

- **Testing and documentation** of common UI components
- Providing **real-time props manipulation / code preview / example verification**
- Unifying QA standards and **improving onboarding efficiency**
- Providing **web-based interface** separate from mobile environment
- Independent usage through **static deployment (Vercel)**

---

## 🛠️ Technology Stack

- `React Native Web`  
- `Storybook for React Native`  
- `@storybook/addon-docs`  
- `@storybook/addon-controls`  
- `Vercel` (Static Deployment)

---

## 📁 Directory Structure

This repository is based on the [storybookjs/addon-react-native-web](https://github.com/storybookjs/addon-react-native-web) example,  
**restructured as a separate tool for improving collaboration efficiency and testing standardization**.

```
.storybook/                     # Storybook configuration files
stories/libraries/nativewind/   # Common components and story definitions
```

> Designed by referencing the sample structure for compatibility between `react-native-web` and `nativewind`.

---

## 💻 How to Run

```bash
npm install
npm run storybook
```


