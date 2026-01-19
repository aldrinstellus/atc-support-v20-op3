/**
 * Database Types for Support IQ (dSQ)
 *
 * Auto-generated types from Supabase + DSQ schema types
 * Generated: 2026-01-19
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// =============================================================================
// DSQ Schema Types (Support IQ specific)
// =============================================================================

export namespace Dsq {
  // ----- Customers -----
  export interface Customer {
    id: string
    external_id: string | null
    email: string
    full_name: string | null
    company: string | null
    phone: string | null
    tier: 'standard' | 'premium' | 'enterprise' | null
    health_score: number | null
    risk_level: 'low' | 'medium' | 'high' | 'critical' | null
    lifetime_value: number | null
    metadata: Json | null
    tags: string[] | null
    created_at: string | null
    updated_at: string | null
    last_contact_at: string | null
  }

  export interface CustomerInsert {
    id?: string
    external_id?: string | null
    email: string
    full_name?: string | null
    company?: string | null
    phone?: string | null
    tier?: 'standard' | 'premium' | 'enterprise' | null
    health_score?: number | null
    risk_level?: 'low' | 'medium' | 'high' | 'critical' | null
    lifetime_value?: number | null
    metadata?: Json | null
    tags?: string[] | null
    created_at?: string | null
    updated_at?: string | null
    last_contact_at?: string | null
  }

  // ----- Agents -----
  export interface Agent {
    id: string
    user_id: string | null
    external_id: string | null
    email: string
    display_name: string
    avatar_url: string | null
    role: 'agent' | 'supervisor' | 'admin' | null
    department: string | null
    status: 'available' | 'busy' | 'away' | 'offline' | null
    skills: string[] | null
    max_concurrent_tickets: number | null
    current_ticket_count: number | null
    performance_score: number | null
    metadata: Json | null
    created_at: string | null
    updated_at: string | null
    last_active_at: string | null
  }

  export interface AgentInsert {
    id?: string
    user_id?: string | null
    external_id?: string | null
    email: string
    display_name: string
    avatar_url?: string | null
    role?: 'agent' | 'supervisor' | 'admin' | null
    department?: string | null
    status?: 'available' | 'busy' | 'away' | 'offline' | null
    skills?: string[] | null
    max_concurrent_tickets?: number | null
    current_ticket_count?: number | null
    performance_score?: number | null
    metadata?: Json | null
    created_at?: string | null
    updated_at?: string | null
    last_active_at?: string | null
  }

  // ----- Tickets -----
  export type TicketStatus = 'open' | 'pending' | 'in_progress' | 'waiting_on_customer' | 'resolved' | 'closed'
  export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent' | 'critical'
  export type TicketChannel = 'web' | 'email' | 'phone' | 'chat' | 'social' | 'api'

  export interface Ticket {
    id: string
    ticket_number: string | null
    customer_id: string | null
    assigned_agent_id: string | null
    sla_policy_id: string | null
    subject: string
    description: string | null
    status: TicketStatus | null
    priority: TicketPriority | null
    channel: TicketChannel | null
    category: string | null
    subcategory: string | null
    tags: string[] | null
    sentiment_score: number | null
    csat_score: number | null
    first_response_at: string | null
    resolved_at: string | null
    closed_at: string | null
    due_at: string | null
    sla_breached: boolean | null
    metadata: Json | null
    embedding: number[] | null
    created_at: string | null
    updated_at: string | null
  }

  export interface TicketInsert {
    id?: string
    ticket_number?: string | null
    customer_id?: string | null
    assigned_agent_id?: string | null
    sla_policy_id?: string | null
    subject: string
    description?: string | null
    status?: TicketStatus | null
    priority?: TicketPriority | null
    channel?: TicketChannel | null
    category?: string | null
    subcategory?: string | null
    tags?: string[] | null
    sentiment_score?: number | null
    csat_score?: number | null
    first_response_at?: string | null
    resolved_at?: string | null
    closed_at?: string | null
    due_at?: string | null
    sla_breached?: boolean | null
    metadata?: Json | null
    embedding?: number[] | null
    created_at?: string | null
    updated_at?: string | null
  }

  // ----- Ticket Messages -----
  export type SenderType = 'customer' | 'agent' | 'system' | 'ai'

  export interface TicketMessage {
    id: string
    ticket_id: string
    sender_type: SenderType
    sender_id: string | null
    content: string
    content_type: 'text' | 'html' | 'markdown' | null
    is_internal: boolean | null
    is_automated: boolean | null
    attachments: Json | null
    metadata: Json | null
    created_at: string | null
  }

  export interface TicketMessageInsert {
    id?: string
    ticket_id: string
    sender_type: SenderType
    sender_id?: string | null
    content: string
    content_type?: 'text' | 'html' | 'markdown' | null
    is_internal?: boolean | null
    is_automated?: boolean | null
    attachments?: Json | null
    metadata?: Json | null
    created_at?: string | null
  }

  // ----- Conversations -----
  export type ConversationStatus = 'active' | 'waiting' | 'resolved' | 'abandoned' | 'transferred'

  export interface Conversation {
    id: string
    ticket_id: string | null
    customer_id: string
    agent_id: string | null
    channel: 'chat' | 'email' | 'phone' | 'social' | null
    status: ConversationStatus | null
    started_at: string | null
    ended_at: string | null
    wait_time_seconds: number | null
    handle_time_seconds: number | null
    csat_score: number | null
    metadata: Json | null
    created_at: string | null
    updated_at: string | null
  }

  export interface ConversationInsert {
    id?: string
    ticket_id?: string | null
    customer_id: string
    agent_id?: string | null
    channel?: 'chat' | 'email' | 'phone' | 'social' | null
    status?: ConversationStatus | null
    started_at?: string | null
    ended_at?: string | null
    wait_time_seconds?: number | null
    handle_time_seconds?: number | null
    csat_score?: number | null
    metadata?: Json | null
    created_at?: string | null
    updated_at?: string | null
  }

  // ----- Conversation Messages -----
  export interface ConversationMessage {
    id: string
    conversation_id: string
    sender_type: 'customer' | 'agent' | 'bot' | 'system'
    sender_id: string | null
    content: string
    content_type: string | null
    attachments: Json | null
    is_read: boolean | null
    created_at: string | null
  }

  export interface ConversationMessageInsert {
    id?: string
    conversation_id: string
    sender_type: 'customer' | 'agent' | 'bot' | 'system'
    sender_id?: string | null
    content: string
    content_type?: string | null
    attachments?: Json | null
    is_read?: boolean | null
    created_at?: string | null
  }

  // ----- Knowledge Base Categories -----
  export interface KbCategory {
    id: string
    parent_id: string | null
    name: string
    slug: string
    description: string | null
    icon: string | null
    sort_order: number | null
    is_active: boolean | null
    article_count: number | null
    created_at: string | null
    updated_at: string | null
  }

  export interface KbCategoryInsert {
    id?: string
    parent_id?: string | null
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    sort_order?: number | null
    is_active?: boolean | null
    article_count?: number | null
    created_at?: string | null
    updated_at?: string | null
  }

  // ----- Knowledge Base Articles -----
  export type ArticleStatus = 'draft' | 'published' | 'archived'

  export interface KbArticle {
    id: string
    category_id: string | null
    title: string
    slug: string
    content: string
    summary: string | null
    author_id: string | null
    status: ArticleStatus | null
    is_public: boolean | null
    is_featured: boolean | null
    view_count: number | null
    helpful_count: number | null
    not_helpful_count: number | null
    tags: string[] | null
    metadata: Json | null
    embedding: number[] | null
    created_at: string | null
    updated_at: string | null
    published_at: string | null
  }

  export interface KbArticleInsert {
    id?: string
    category_id?: string | null
    title: string
    slug: string
    content: string
    summary?: string | null
    author_id?: string | null
    status?: ArticleStatus | null
    is_public?: boolean | null
    is_featured?: boolean | null
    view_count?: number | null
    helpful_count?: number | null
    not_helpful_count?: number | null
    tags?: string[] | null
    metadata?: Json | null
    embedding?: number[] | null
    created_at?: string | null
    updated_at?: string | null
    published_at?: string | null
  }

  // ----- SLA Policies -----
  export interface SlaPolicy {
    id: string
    name: string
    description: string | null
    priority: string
    first_response_hours: number
    resolution_hours: number
    business_hours_only: boolean | null
    is_active: boolean | null
    metadata: Json | null
    created_at: string | null
    updated_at: string | null
  }

  export interface SlaPolicyInsert {
    id?: string
    name: string
    description?: string | null
    priority: string
    first_response_hours: number
    resolution_hours: number
    business_hours_only?: boolean | null
    is_active?: boolean | null
    metadata?: Json | null
    created_at?: string | null
    updated_at?: string | null
  }

  // ----- Tags -----
  export interface Tag {
    id: string
    name: string
    color: string | null
    description: string | null
    usage_count: number | null
    created_at: string | null
  }

  export interface TagInsert {
    id?: string
    name: string
    color?: string | null
    description?: string | null
    usage_count?: number | null
    created_at?: string | null
  }

  // ----- Escalations -----
  export type EscalationStatus = 'pending' | 'accepted' | 'declined' | 'resolved'

  export interface Escalation {
    id: string
    ticket_id: string
    from_agent_id: string | null
    to_agent_id: string | null
    to_team: string | null
    reason: string
    priority: 'normal' | 'high' | 'urgent' | null
    status: EscalationStatus | null
    notes: string | null
    metadata: Json | null
    created_at: string | null
    resolved_at: string | null
  }

  export interface EscalationInsert {
    id?: string
    ticket_id: string
    from_agent_id?: string | null
    to_agent_id?: string | null
    to_team?: string | null
    reason: string
    priority?: 'normal' | 'high' | 'urgent' | null
    status?: EscalationStatus | null
    notes?: string | null
    metadata?: Json | null
    created_at?: string | null
    resolved_at?: string | null
  }

  // ----- Canned Responses -----
  export interface CannedResponse {
    id: string
    title: string
    shortcut: string | null
    content: string
    category: string | null
    tags: string[] | null
    is_public: boolean | null
    created_by: string | null
    usage_count: number | null
    embedding: number[] | null
    metadata: Json | null
    created_at: string | null
    updated_at: string | null
  }

  export interface CannedResponseInsert {
    id?: string
    title: string
    shortcut?: string | null
    content: string
    category?: string | null
    tags?: string[] | null
    is_public?: boolean | null
    created_by?: string | null
    usage_count?: number | null
    embedding?: number[] | null
    metadata?: Json | null
    created_at?: string | null
    updated_at?: string | null
  }

  // ----- Agent Metrics -----
  export interface AgentMetrics {
    id: string
    agent_id: string
    date: string
    tickets_assigned: number | null
    tickets_resolved: number | null
    tickets_escalated: number | null
    avg_response_time_minutes: number | null
    avg_resolution_time_minutes: number | null
    avg_csat_score: number | null
    total_messages_sent: number | null
    total_calls_handled: number | null
    utilization_percentage: number | null
    metadata: Json | null
    created_at: string | null
  }

  export interface AgentMetricsInsert {
    id?: string
    agent_id: string
    date: string
    tickets_assigned?: number | null
    tickets_resolved?: number | null
    tickets_escalated?: number | null
    avg_response_time_minutes?: number | null
    avg_resolution_time_minutes?: number | null
    avg_csat_score?: number | null
    total_messages_sent?: number | null
    total_calls_handled?: number | null
    utilization_percentage?: number | null
    metadata?: Json | null
    created_at?: string | null
  }

  // ----- Analytics -----
  export interface Analytics {
    id: string
    event_type: string
    event_category: string | null
    entity_type: string | null
    entity_id: string | null
    actor_type: string | null
    actor_id: string | null
    properties: Json | null
    session_id: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: string | null
  }

  export interface AnalyticsInsert {
    id?: string
    event_type: string
    event_category?: string | null
    entity_type?: string | null
    entity_id?: string | null
    actor_type?: string | null
    actor_id?: string | null
    properties?: Json | null
    session_id?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_at?: string | null
  }

  // ----- Activity Log -----
  export interface ActivityLog {
    id: string
    entity_type: string
    entity_id: string
    action: string
    actor_type: string | null
    actor_id: string | null
    changes: Json | null
    metadata: Json | null
    created_at: string | null
  }

  export interface ActivityLogInsert {
    id?: string
    entity_type: string
    entity_id: string
    action: string
    actor_type?: string | null
    actor_id?: string | null
    changes?: Json | null
    metadata?: Json | null
    created_at?: string | null
  }
}

// =============================================================================
// Public Schema Types (Shared across all Digital Workplace AI projects)
// =============================================================================

export namespace Public {
  export interface User {
    id: string
    clerk_id: string | null
    email: string
    full_name: string | null
    avatar_url: string | null
    role: 'user' | 'admin' | 'super_admin'
    created_at: string
    updated_at: string
  }

  export interface Project {
    id: string
    code: string
    name: string
    description: string | null
    color_primary: string | null
    color_secondary: string | null
    is_active: boolean | null
    settings: Json | null
    created_at: string | null
    updated_at: string | null
  }

  export interface KnowledgeItem {
    id: string
    project_id: string
    source_table: string
    source_id: string
    type: string
    title: string
    content: string | null
    summary: string | null
    tags: string[] | null
    embedding: string | null
    metadata: Json | null
    created_by: string | null
    created_at: string | null
    updated_at: string | null
  }
}

// =============================================================================
// Database Type (Combined)
// =============================================================================

export interface Database {
  public: {
    Tables: {
      users: {
        Row: Public.User
        Insert: Partial<Public.User> & Pick<Public.User, 'email'>
        Update: Partial<Public.User>
      }
      projects: {
        Row: Public.Project
        Insert: Partial<Public.Project> & Pick<Public.Project, 'code' | 'name'>
        Update: Partial<Public.Project>
      }
      knowledge_items: {
        Row: Public.KnowledgeItem
        Insert: Partial<Public.KnowledgeItem> & Pick<Public.KnowledgeItem, 'project_id' | 'source_table' | 'source_id' | 'type' | 'title'>
        Update: Partial<Public.KnowledgeItem>
      }
    }
  }
  dsq: {
    Tables: {
      customers: {
        Row: Dsq.Customer
        Insert: Dsq.CustomerInsert
        Update: Partial<Dsq.Customer>
      }
      agents: {
        Row: Dsq.Agent
        Insert: Dsq.AgentInsert
        Update: Partial<Dsq.Agent>
      }
      tickets: {
        Row: Dsq.Ticket
        Insert: Dsq.TicketInsert
        Update: Partial<Dsq.Ticket>
      }
      ticket_messages: {
        Row: Dsq.TicketMessage
        Insert: Dsq.TicketMessageInsert
        Update: Partial<Dsq.TicketMessage>
      }
      conversations: {
        Row: Dsq.Conversation
        Insert: Dsq.ConversationInsert
        Update: Partial<Dsq.Conversation>
      }
      conversation_messages: {
        Row: Dsq.ConversationMessage
        Insert: Dsq.ConversationMessageInsert
        Update: Partial<Dsq.ConversationMessage>
      }
      kb_categories: {
        Row: Dsq.KbCategory
        Insert: Dsq.KbCategoryInsert
        Update: Partial<Dsq.KbCategory>
      }
      kb_articles: {
        Row: Dsq.KbArticle
        Insert: Dsq.KbArticleInsert
        Update: Partial<Dsq.KbArticle>
      }
      sla_policies: {
        Row: Dsq.SlaPolicy
        Insert: Dsq.SlaPolicyInsert
        Update: Partial<Dsq.SlaPolicy>
      }
      tags: {
        Row: Dsq.Tag
        Insert: Dsq.TagInsert
        Update: Partial<Dsq.Tag>
      }
      escalations: {
        Row: Dsq.Escalation
        Insert: Dsq.EscalationInsert
        Update: Partial<Dsq.Escalation>
      }
      canned_responses: {
        Row: Dsq.CannedResponse
        Insert: Dsq.CannedResponseInsert
        Update: Partial<Dsq.CannedResponse>
      }
      agent_metrics: {
        Row: Dsq.AgentMetrics
        Insert: Dsq.AgentMetricsInsert
        Update: Partial<Dsq.AgentMetrics>
      }
      analytics: {
        Row: Dsq.Analytics
        Insert: Dsq.AnalyticsInsert
        Update: Partial<Dsq.Analytics>
      }
      activity_log: {
        Row: Dsq.ActivityLog
        Insert: Dsq.ActivityLogInsert
        Update: Partial<Dsq.ActivityLog>
      }
    }
  }
}

// =============================================================================
// Helper Types
// =============================================================================

export type DsqTables = keyof Database['dsq']['Tables']
export type PublicTables = keyof Database['public']['Tables']

// Type-safe table row getter
export type TableRow<
  Schema extends 'public' | 'dsq',
  Table extends Schema extends 'public' ? PublicTables : DsqTables
> = Schema extends 'public'
  ? Database['public']['Tables'][Table extends PublicTables ? Table : never]['Row']
  : Database['dsq']['Tables'][Table extends DsqTables ? Table : never]['Row']
