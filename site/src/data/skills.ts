// Agrupadas pelo que resolvem. União dos dois currículos.
// Istio, KEDA e CloudFormation ficam de fora: não são defensáveis em entrevista.
export const areasEn: Record<string, string> = {"Plataforma e containers": "Platform and containers", "Entrega e GitOps": "Delivery and GitOps", "Infraestrutura como código": "Infrastructure as code", "Cloud": "Cloud", "Sistemas": "Systems", "Observabilidade": "Observability", "Mensageria e gateway": "Messaging and gateway", "Linguagens": "Languages", "Backend e dados": "Backend and data", "Frontend e mobile": "Frontend and mobile", "Testes e qualidade": "Testing and quality", "Segurança": "Security", "Idiomas": "Spoken languages"};

// Só os itens que são descrição, não nome próprio, precisam de tradução.
export const itensEn: Record<string, string> = {
  "Português nativo": "Portuguese (native)",
  "Inglês avançado (C1)": "English (C1)",
};

export const skills = [
  { area: 'Plataforma e containers',
    itens: ['Kubernetes', 'OKE', 'AWS ECS', 'Docker', 'Helm'] },
  { area: 'Entrega e GitOps',
    itens: ['ArgoCD', 'Azure DevOps', 'GitHub Actions', 'Kamal', 'Harbor', 'CI/CD'] },
  { area: 'Infraestrutura como código',
    itens: ['Terraform', 'Ansible', 'Helm'] },
  { area: 'Cloud',
    itens: ['Oracle Cloud (OCI)', 'AWS', 'Cloudflare'] },
  { area: 'Sistemas',
    itens: ['Linux', 'Bash', 'Shell Script', 'Git'] },
  { area: 'Observabilidade',
    itens: ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry', 'Fluent Bit'] },
  { area: 'Mensageria e gateway',
    itens: ['Apache Kafka', 'KrakenD'] },
  { area: 'Linguagens',
    itens: ['Ruby', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'] },
  { area: 'Backend e dados',
    itens: ['Ruby on Rails', 'Hotwire', 'Solid Stack', 'Sidekiq', 'APIs REST', 'PostgreSQL', 'Oracle', 'Redis'] },
  { area: 'Frontend e mobile',
    itens: ['React', 'Stimulus', 'Tailwind', 'Bootstrap', 'Flutter'] },
  { area: 'Testes e qualidade',
    itens: ['RSpec', 'Capybara', 'RuboCop', 'SonarQube', 'Semgrep'] },
  { area: 'Segurança',
    itens: ['Keycloak', 'Entra ID', 'SSO', 'OIDC', 'RBAC', 'AWS Secrets Manager', 'External Secrets', 'Gitleaks', 'Trivy'] },
  { area: 'Idiomas',
    itens: ['Português nativo', 'Inglês avançado (C1)'] },
];
