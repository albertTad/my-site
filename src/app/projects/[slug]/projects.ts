// Keep this file beside the project detail route, matching its ./projects import.
// Add codeUrl, demoUrl, contribution, results, and screenshots to each project
// when available. Screenshot paths refer to files under public/.
export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  type: string;
  purpose: string;
  keyComponents: string[];
  techStack: string[];
  category: string;
  image: string;
  problem: string;
  decisions: { title: string; detail: string }[];
  // Add only verified details. Optional sections stay hidden until populated.
  contribution?: string;
  results?: { value: string; label: string; context: string }[];
  codeUrl?: string;
  demoUrl?: string;
  screenshots?: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "data-privacy-management-dashboard",
    problem: "Sensitive information in a database needs more than detection: it also needs controlled access and a record of how it is used.",
    decisions: [
      { title: "Detection and protection", detail: "Presidio identifies PII, while encryption protects the detected data." },
      { title: "Controlled access", detail: "Role-based access controls govern decryption; audit logs record data access." },
      { title: "An interface for privacy workflows", detail: "A React and TypeScript dashboard connects privacy policy management to a Flask backend." },
    ],
    title: "Data Privacy Management & Compliance Dashboard",
    shortDescription:
      "Full-stack security platform for detecting, encrypting, and controlling access to sensitive PII data.",
    type: "Full-stack software / security engineering project",
    purpose:
      "Protect sensitive data by detecting and encrypting Personally Identifiable Information (PII) in databases while allowing controlled access when needed.",
    keyComponents: [
      "PII detection: Uses machine learning (Presidio) to automatically identify sensitive information.",
      "Encryption system: Encrypts detected PII in databases.",
      "Controlled decryption: Role-based access control (RBAC) for authorized users.",
      "Security monitoring: Detects unauthorized access attempts.",
      "Audit logs: Tracks data access for compliance.",
      "Dashboard UI: Visual interface for managing privacy policies and access.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Flask",
      "Presidio ML model",
      "Database encryption systems",
      "RBAC security controls",
    ],
    category: "Full-stack + security + data governance system",
    image: "/projects/privacy_project.png",
  },
  {
    slug: "spinal-fracture-detection",
    problem: "A fracture-detection model needs a consistent image-processing workflow and a way to inspect its predictions.",
    decisions: [
      { title: "Prepare the imaging data", detail: "DICOM normalization, resizing, and segmentation form the preprocessing workflow." },
      { title: "Use transfer learning", detail: "The model uses an EfficientNetV2 CNN with GPU-accelerated training." },
      { title: "Inspect and evaluate predictions", detail: "Grad-CAM visualizations accompany evaluation with F1 scores, validation curves, and confusion matrices." },
    ],
    title: "Deep Learning System for Spinal Fracture Detection",
    shortDescription:
      "Computer vision system for automatically detecting and localizing spinal fractures in MRI scans.",
    type: "Machine learning / computer vision project",
    purpose:
      "Automatically detect and localize spinal fractures in MRI scans to help clinicians diagnose injuries faster.",
    keyComponents: [
      "Dataset: ~700,000 MRI scan images.",
      "EDA: Data exploration, outlier detection, correlation analysis.",
      "Preprocessing: DICOM normalization, resizing, segmentation.",
      "Model: EfficientNetV2 CNN using transfer learning.",
      "Training: GPU-accelerated training (Kaggle GPUs / cloud).",
      "Explainability: Grad-CAM to highlight fracture locations.",
      "Evaluation: F1 score, validation curves, confusion matrices.",
    ],
    techStack: [
      "Python",
      "FastAI",
      "PyTorch",
      "CNN (EfficientNetV2)",
      "Grad-CAM",
      "GPU training",
    ],
    category: "Deep learning + medical imaging + AI explainability",
    image: "/projects/spinal_project.png",
  },
  {
  slug: "filesystem-mcp-server",
    problem: "Giving an AI client access to local files requires clear boundaries around which directories and operations are allowed.",
    decisions: [
      { title: "Validate access before operating", detail: "A validation layer normalizes paths and checks directory boundaries before filesystem operations." },
      { title: "Handle escape paths", detail: "Traversal protection and symlink checks address routes that could lead outside approved directories." },
      { title: "Expose a focused tool interface", detail: "FastMCP exposes file reading, directory listing, and search through an MCP-compatible interface." },
    ],
  title: "Filesystem MCP Server",
  shortDescription:
    "Secure MCP server for reading, listing, and searching files from local directories through a sandboxed directory model.",
  type: "Backend infrastructure / developer tools / security engineering project",
  purpose:
    "Provide safe file-system access through an MCP server that can read, list, and search files from local directories while enforcing sandbox boundaries and protecting against unsafe path access.",
  keyComponents: [
    "Sandboxed directory access: Restricts all file operations to approved local directory boundaries.",
    "File reading: Safely reads allowed files from local directories.",
    "Directory listing: Lists files and folders within the sandbox scope.",
    "File search: Searches files and content within permitted directories.",
    "Traversal attack protection: Prevents path traversal attempts such as ../ escapes.",
    "Symlink path detection: Detects and blocks symlink-based path escape techniques.",
    "Security validation layer: Normalizes and validates paths before any file operation is executed.",
    "MCP tool interface: Exposes filesystem capabilities through MCP-compatible tools for client applications.",
  ],
  techStack: [
    "Python",
    "FastMCP",
    "Filesystem APIs",
    "Path normalization",
    "Security validation",
    "Sandboxed directory controls",
  ],
  category: "MCP + filesystem tooling + secure local access",
  image: "/projects/mcp_project.png",
},
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}