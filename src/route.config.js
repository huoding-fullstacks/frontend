import App from './App'
import TopicList from './components/topic/list/index'
import TopicWrite from './components/topic/write/index'
import TopicDetail from './components/topic/detail/index'
import KnowledgeWeek from './components/knowledge/week/index'
import KnowledgeToday from './components/knowledge/today/index'

let routes = [
    { path: '/', component: KnowledgeToday },
    { path: '/topic', component: TopicList },
    { path: '/topic/write', name: "topic-write", component: TopicWrite },
    { path: '/topic/:id', component: TopicDetail },
    { path: '/knowledge/week', component : KnowledgeWeek},
    { path: '/knowledge/today', component : KnowledgeToday},
];

export default routes