import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';

const data: Data = {
  name: 'Trần Xuân Dũng', // TODO: cập nhật tên đầy đủ của bạn
  globalName: 'Dzung Tran',
  lastUpdatedAt: new Date('2026-05-04'),
  status: {
    color: 'active',
    label: 'Đang tìm kiếm cơ hội',
  },
  location: 'Thành phố Hồ Chí Minh, Việt Nam',
  bio: 'Tech Lead · Kỹ sư Full-Stack',
  summary:
    'Tech Lead với hơn 8 năm kinh nghiệm thiết kế và triển khai hệ thống có khả năng mở rộng trong các lĩnh vực chính phủ số, fintech, mạng xã hội và gaming. Chuyên sâu về backend Java/Spring Boot, Python và Node.js; có kinh nghiệm thực chiến với hạ tầng đám mây (AWS, Kubernetes), kiến trúc thời gian thực (WebSocket, Kafka) và mobile đa nền tảng (React Native, Flutter). Làm chủ toàn bộ vòng đời sản phẩm — từ thiết kế hệ thống, quản lý stakeholder đến triển khai thực tế và hướng dẫn đội kỹ thuật.',
  avatarUrl: getAssetPath() + '/locale/vi/profile.webp',
  skills: [
    'Java', 'Spring Boot', 'Python', 'FastAPI', 'GeoDjango',
    'NestJS', 'Node.js', 'React', 'React Native', 'Flutter', 'TypeScript',
    'PostgreSQL', 'PostGIS', 'Oracle SQL',
    'Apache Kafka', 'WebSocket', 'Odoo',
    'AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform',
  ],
  education: [
    {
      school: 'Đại học Hà Nội',
      degree: 'Cử nhân',
      start: '2013',
      end: '2017',
    },
  ],
  work: [
    {
      company: 'AHT Tech',
      badges: ['Toàn thời gian'],
      title: 'Tech Lead',
      start: '2023',
      end: 'Hiện tại',
      description:
        'Dẫn dắt kiến trúc giải pháp cho bốn sản phẩm song song: nền tảng chính phủ số quy mô lớn (Java Spring Boot, Kafka, Dremio, Kubernetes, Oracle SQL); ứng dụng mạng xã hội định vị thời gian thực với tính năng địa lý phức tạp (Python/GeoDjango, NestJS, React Native, PostGIS, kiểm duyệt AI); backend Odoo CRM tuỳ chỉnh cho thương mại điện tử; và nền tảng đầu tư thời gian thực độ đồng thời cao (NestJS, WebSocket, Blockchain, AWS, Terraform). Chịu trách nhiệm ra quyết định kỹ thuật, quản lý CI/CD qua Jenkins và Kubernetes, hướng dẫn kỹ sư qua code review và buổi chia sẻ kiến thức, và dẫn dắt toàn bộ giao tiếp kỹ thuật bằng tiếng Anh với stakeholder quốc tế.',
    },
    {
      company: 'Antsoft',
      badges: ['Outsourcing'],
      title: 'Senior Software Engineer → Tech Lead',
      start: '2020',
      end: '2023',
      description:
        'Hoàn thành bảy dự án hợp đồng đa lĩnh vực: Spring Boot microservices cho khách hàng Nhật Bản với giao tiếp kỹ thuật trực tiếp bằng tiếng Nhật/Anh; hạ tầng AWS và Jenkins CI/CD cho GEM Vietnam; ứng dụng mobile đa nền tảng với Flutter, iOS native, Firebase (Auth, Firestore, Push) và LINE SDK; kiến trúc microservice Netflix OSS (Eureka, Spring Cloud Gateway, PostgreSQL với tối ưu query từ DBA); backend hoàn chỉnh cho hệ thống quản lý SIM bao gồm xử lý thanh toán end-to-end; ứng dụng quản lý bất động sản (Flutter + Spring Boot); và migration rủi ro cao từ Spring Framework 2/Java 7 lên Spring Boot 3/Java 11 không mất dữ liệu hay downtime ngoài kế hoạch.',
    },
    {
      company: 'Gameloft',
      badges: [],
      title: 'Software Engineer',
      start: '2017',
      end: '2020',
      description:
        'Phát triển prototype game nhanh bằng Unity (C#) và Unreal Engine (C++) trong môi trường sáng tạo tốc độ cao, lặp cơ chế gameplay và bàn giao bản chơi thử mỗi sprint. Thiết kế và duy trì CI pipeline Jenkins cho build đa nền tảng trên server farm của studio theo ma trận build phức tạp, giảm đáng kể thời gian build thủ công. Duy trì và phát triển tính năng live cho March of Empires (game chiến thuật mobile quy mô lớn với người chơi toàn cầu), xử lý lỗi Android về rendering, quản lý bộ nhớ và tương thích đa thiết bị trong codebase engine độc quyền.',
    },
    {
      company: 'NextTech',
      badges: [],
      title: 'Junior Full-Stack Developer',
      start: '2017',
      end: 'Giữa 2017',
      description:
        'Tham gia phát triển full-stack nền tảng thương mại điện tử sử dụng Java Spring Boot REST API và AngularJS. Đảm nhận giao diện storefront phía khách hàng và nhiều module admin — quản lý sản phẩm, xử lý đơn hàng và công cụ back-office.',
    },
  ],
  contacts: [
    {
      label: 'dungtx32@gmail.com',
      href: 'mailto:dungtx32@gmail.com',
      icon: Mail,
      toolbar: true,
    },
  ],
  projects: [
    {
      title: 'VPHC – Nền tảng Chính phủ số',
      techStack: ['Java Spring Boot', 'Apache Kafka', 'Dremio', 'Kubernetes', 'Oracle SQL', 'Jenkins'],
      description:
        'Nền tảng chính phủ số quy mô lớn với pipeline data warehouse thời gian thực (Kafka + Dremio) và triển khai Kubernetes on-premises.',
    },
    {
      title: 'Versmap – Nền tảng Mạng xã hội Vị trí',
      techStack: ['Spring Boot', 'Python', 'FastAPI', 'GeoDjango', 'NestJS', 'React Native', 'PostGIS'],
      description:
        'Nền tảng mạng xã hội đa dịch vụ cho theo dõi bạn bè thời gian thực và khám phá địa điểm (POI), với WebSocket live-location, chat và kiểm duyệt nội dung AI.',
    },
    {
      title: 'FSM – Nền tảng Đầu tư Thời gian thực',
      techStack: ['NestJS', 'WebSocket', 'React SSR', 'Blockchain', 'AWS', 'Terraform'],
      description:
        'Nền tảng đầu tư độ đồng thời cao với WebSocket feed bền vững, Nest Workers xử lý job nền, và tích hợp smart contract blockchain on-chain.',
    },
  ],
  links: [
    {
      label: 'GitHub',
      href: 'https://dungtx.github.io/cv/',
      icon: SiGithub,
    },
  ],
};

export default data;
