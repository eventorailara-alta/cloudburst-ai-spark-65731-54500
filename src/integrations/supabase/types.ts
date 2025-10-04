export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      attendee_groups: {
        Row: {
          attendee_name: string
          created_at: string
          event_id: string
          group_type: string
          id: string
          is_banned: boolean | null
          joined_at: string | null
          password: string | null
          phone_number: string | null
          updated_at: string
        }
        Insert: {
          attendee_name: string
          created_at?: string
          event_id: string
          group_type: string
          id?: string
          is_banned?: boolean | null
          joined_at?: string | null
          password?: string | null
          phone_number?: string | null
          updated_at?: string
        }
        Update: {
          attendee_name?: string
          created_at?: string
          event_id?: string
          group_type?: string
          id?: string
          is_banned?: boolean | null
          joined_at?: string | null
          password?: string | null
          phone_number?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      attendee_plans: {
        Row: {
          attendee_name: string
          budget_breakdown: Json | null
          created_at: string | null
          event_id: string
          gift_ideas: Json | null
          id: string
          outfit_suggestions: Json | null
          plan_data: Json | null
          prep_checklist: Json | null
          updated_at: string | null
        }
        Insert: {
          attendee_name: string
          budget_breakdown?: Json | null
          created_at?: string | null
          event_id: string
          gift_ideas?: Json | null
          id?: string
          outfit_suggestions?: Json | null
          plan_data?: Json | null
          prep_checklist?: Json | null
          updated_at?: string | null
        }
        Update: {
          attendee_name?: string
          budget_breakdown?: Json | null
          created_at?: string | null
          event_id?: string
          gift_ideas?: Json | null
          id?: string
          outfit_suggestions?: Json | null
          plan_data?: Json | null
          prep_checklist?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      balloon_transactions: {
        Row: {
          amount: number
          clerk_user_id: string
          created_at: string | null
          description: string
          id: string
          transaction_type: string
        }
        Insert: {
          amount: number
          clerk_user_id: string
          created_at?: string | null
          description: string
          id?: string
          transaction_type: string
        }
        Update: {
          amount?: number
          clerk_user_id?: string
          created_at?: string | null
          description?: string
          id?: string
          transaction_type?: string
        }
        Relationships: []
      }
      blog_comments: {
        Row: {
          author_name: string
          blog_id: string
          comment_text: string
          created_at: string
          id: string
        }
        Insert: {
          author_name: string
          blog_id: string
          comment_text: string
          created_at?: string
          id?: string
        }
        Update: {
          author_name?: string
          blog_id?: string
          comment_text?: string
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      blog_reactions: {
        Row: {
          blog_id: string
          created_at: string
          id: string
          reaction_type: string
          user_identifier: string
        }
        Insert: {
          blog_id: string
          created_at?: string
          id?: string
          reaction_type: string
          user_identifier: string
        }
        Update: {
          blog_id?: string
          created_at?: string
          id?: string
          reaction_type?: string
          user_identifier?: string
        }
        Relationships: []
      }
      budget_items: {
        Row: {
          actual_cost: number | null
          category: string
          created_at: string
          estimated_cost: number
          event_id: string
          id: string
          image_url: string | null
          item_name: string
          notes: string | null
          quantity: number | null
          updated_at: string
        }
        Insert: {
          actual_cost?: number | null
          category: string
          created_at?: string
          estimated_cost: number
          event_id: string
          id?: string
          image_url?: string | null
          item_name: string
          notes?: string | null
          quantity?: number | null
          updated_at?: string
        }
        Update: {
          actual_cost?: number | null
          category?: string
          created_at?: string
          estimated_cost?: number
          event_id?: string
          id?: string
          image_url?: string | null
          item_name?: string
          notes?: string | null
          quantity?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "budget_items_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_attendees: {
        Row: {
          attendee_name: string
          attendee_type: string
          checked_in: boolean | null
          checked_in_at: string | null
          created_at: string
          event_id: string
          id: string
          joined_at: string
        }
        Insert: {
          attendee_name: string
          attendee_type?: string
          checked_in?: boolean | null
          checked_in_at?: string | null
          created_at?: string
          event_id: string
          id?: string
          joined_at?: string
        }
        Update: {
          attendee_name?: string
          attendee_type?: string
          checked_in?: boolean | null
          checked_in_at?: string | null
          created_at?: string
          event_id?: string
          id?: string
          joined_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_attendees_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_blogs: {
        Row: {
          author_name: string | null
          blog_number: number
          content: string
          created_at: string
          event_id: string
          id: string
          is_published: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          author_name?: string | null
          blog_number: number
          content: string
          created_at?: string
          event_id: string
          id?: string
          is_published?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          author_name?: string | null
          blog_number?: number
          content?: string
          created_at?: string
          event_id?: string
          id?: string
          is_published?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      event_call_history: {
        Row: {
          created_at: string
          duration_seconds: number
          event_id: string
          id: string
          summary: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number
          event_id: string
          id?: string
          summary: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number
          event_id?: string
          id?: string
          summary?: string
        }
        Relationships: []
      }
      event_card_positions: {
        Row: {
          card_order: Json
          created_at: string | null
          event_id: string
          id: string
          updated_at: string | null
          user_identifier: string
        }
        Insert: {
          card_order?: Json
          created_at?: string | null
          event_id: string
          id?: string
          updated_at?: string | null
          user_identifier: string
        }
        Update: {
          card_order?: Json
          created_at?: string | null
          event_id?: string
          id?: string
          updated_at?: string | null
          user_identifier?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_card_positions_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          role: string
          session_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          role: string
          session_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          role?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "event_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      event_chat_sessions: {
        Row: {
          chat_type: string
          created_at: string
          event_id: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          chat_type?: string
          created_at?: string
          event_id: string
          id?: string
          title?: string
          updated_at?: string
        }
        Update: {
          chat_type?: string
          created_at?: string
          event_id?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      event_decorations: {
        Row: {
          category: string
          content: string
          created_at: string | null
          event_id: string
          id: string
          purchase_links: Json | null
          updated_at: string | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          event_id: string
          id?: string
          purchase_links?: Json | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          event_id?: string
          id?: string
          purchase_links?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_decorations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_faqs: {
        Row: {
          answer: string
          created_at: string
          event_id: string
          id: string
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          created_at?: string
          event_id: string
          id?: string
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          created_at?: string
          event_id?: string
          id?: string
          question?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_faqs_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_favorites: {
        Row: {
          created_at: string
          event_id: string
          id: string
          user_identifier: string
        }
        Insert: {
          created_at?: string
          event_id: string
          id?: string
          user_identifier: string
        }
        Update: {
          created_at?: string
          event_id?: string
          id?: string
          user_identifier?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_favorites_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_flights: {
        Row: {
          airline: string
          arrival_location: string
          arrival_time: string
          booking_link: string | null
          created_at: string | null
          departure_location: string
          departure_time: string
          event_id: string
          flight_date: string
          flight_number: string | null
          id: string
          price: string | null
          stops: number | null
        }
        Insert: {
          airline: string
          arrival_location: string
          arrival_time: string
          booking_link?: string | null
          created_at?: string | null
          departure_location: string
          departure_time: string
          event_id: string
          flight_date: string
          flight_number?: string | null
          id?: string
          price?: string | null
          stops?: number | null
        }
        Update: {
          airline?: string
          arrival_location?: string
          arrival_time?: string
          booking_link?: string | null
          created_at?: string | null
          departure_location?: string
          departure_time?: string
          event_id?: string
          flight_date?: string
          flight_number?: string | null
          id?: string
          price?: string | null
          stops?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "event_flights_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_settings: {
        Row: {
          created_at: string
          event_id: string
          external_invites_enabled: boolean | null
          guest_handbook: string | null
          ice_breakers_enabled: boolean | null
          id: string
          rules_guidelines: string | null
          updated_at: string
          visible_cards: Json | null
        }
        Insert: {
          created_at?: string
          event_id: string
          external_invites_enabled?: boolean | null
          guest_handbook?: string | null
          ice_breakers_enabled?: boolean | null
          id?: string
          rules_guidelines?: string | null
          updated_at?: string
          visible_cards?: Json | null
        }
        Update: {
          created_at?: string
          event_id?: string
          external_invites_enabled?: boolean | null
          guest_handbook?: string | null
          ice_breakers_enabled?: boolean | null
          id?: string
          rules_guidelines?: string | null
          updated_at?: string
          visible_cards?: Json | null
        }
        Relationships: []
      }
      event_speeches: {
        Row: {
          created_at: string
          event_id: string
          id: string
          speech_content: string
          speech_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          event_id: string
          id?: string
          speech_content: string
          speech_type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          event_id?: string
          id?: string
          speech_content?: string
          speech_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_speeches_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_themes: {
        Row: {
          color_palette: Json | null
          created_at: string | null
          event_id: string
          id: string
          is_starred: boolean | null
          suggestions: Json | null
          theme_description: string
          theme_name: string
          updated_at: string | null
        }
        Insert: {
          color_palette?: Json | null
          created_at?: string | null
          event_id: string
          id?: string
          is_starred?: boolean | null
          suggestions?: Json | null
          theme_description: string
          theme_name: string
          updated_at?: string | null
        }
        Update: {
          color_palette?: Json | null
          created_at?: string | null
          event_id?: string
          id?: string
          is_starred?: boolean | null
          suggestions?: Json | null
          theme_description?: string
          theme_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_themes_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_winners: {
        Row: {
          created_at: string
          custom_names: Json | null
          event_id: string
          id: string
          updated_at: string
          winner_name: string
        }
        Insert: {
          created_at?: string
          custom_names?: Json | null
          event_id: string
          id?: string
          updated_at?: string
          winner_name: string
        }
        Update: {
          created_at?: string
          custom_names?: Json | null
          event_id?: string
          id?: string
          updated_at?: string
          winner_name?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          ai_generated_description: string | null
          clerk_user_id: string | null
          color_theme: string | null
          country: string | null
          created_at: string
          currency: string | null
          estimated_budget: number | null
          estimated_guests: number | null
          event_date: string
          event_duration: number | null
          event_image: string | null
          event_time: string | null
          event_type: string
          guest_age_range: string | null
          guest_gender: string | null
          id: string
          invite_code: string | null
          is_public: boolean | null
          location_lat: number | null
          location_lng: number | null
          location_name: string | null
          memory_images: string[] | null
          name: string
          password: string | null
          plan_mode: string
          short_description: string | null
          special_notes: string | null
          state: string | null
          theme_preferences: string | null
          updated_at: string
          user_id: string | null
          venue_recommendation: string | null
          weather_data: Json | null
        }
        Insert: {
          ai_generated_description?: string | null
          clerk_user_id?: string | null
          color_theme?: string | null
          country?: string | null
          created_at?: string
          currency?: string | null
          estimated_budget?: number | null
          estimated_guests?: number | null
          event_date: string
          event_duration?: number | null
          event_image?: string | null
          event_time?: string | null
          event_type: string
          guest_age_range?: string | null
          guest_gender?: string | null
          id?: string
          invite_code?: string | null
          is_public?: boolean | null
          location_lat?: number | null
          location_lng?: number | null
          location_name?: string | null
          memory_images?: string[] | null
          name: string
          password?: string | null
          plan_mode: string
          short_description?: string | null
          special_notes?: string | null
          state?: string | null
          theme_preferences?: string | null
          updated_at?: string
          user_id?: string | null
          venue_recommendation?: string | null
          weather_data?: Json | null
        }
        Update: {
          ai_generated_description?: string | null
          clerk_user_id?: string | null
          color_theme?: string | null
          country?: string | null
          created_at?: string
          currency?: string | null
          estimated_budget?: number | null
          estimated_guests?: number | null
          event_date?: string
          event_duration?: number | null
          event_image?: string | null
          event_time?: string | null
          event_type?: string
          guest_age_range?: string | null
          guest_gender?: string | null
          id?: string
          invite_code?: string | null
          is_public?: boolean | null
          location_lat?: number | null
          location_lng?: number | null
          location_name?: string | null
          memory_images?: string[] | null
          name?: string
          password?: string | null
          plan_mode?: string
          short_description?: string | null
          special_notes?: string | null
          state?: string | null
          theme_preferences?: string | null
          updated_at?: string
          user_id?: string | null
          venue_recommendation?: string | null
          weather_data?: Json | null
        }
        Relationships: []
      }
      game_room_participants: {
        Row: {
          id: string
          joined_at: string | null
          participant_id: string | null
          participant_name: string
          room_id: string
          score: number | null
        }
        Insert: {
          id?: string
          joined_at?: string | null
          participant_id?: string | null
          participant_name: string
          room_id: string
          score?: number | null
        }
        Update: {
          id?: string
          joined_at?: string | null
          participant_id?: string | null
          participant_name?: string
          room_id?: string
          score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "game_room_participants_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "game_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      game_rooms: {
        Row: {
          created_at: string | null
          event_id: string
          game_data: Json | null
          game_type: string
          id: string
          room_code: string
        }
        Insert: {
          created_at?: string | null
          event_id: string
          game_data?: Json | null
          game_type: string
          id?: string
          room_code: string
        }
        Update: {
          created_at?: string | null
          event_id?: string
          game_data?: Json | null
          game_type?: string
          id?: string
          room_code?: string
        }
        Relationships: []
      }
      game_settings: {
        Row: {
          ai_trivia_enabled: boolean | null
          created_at: string | null
          emoji_guess_enabled: boolean | null
          event_id: string
          ice_breakers_enabled: boolean | null
          id: string
          jeopardy_enabled: boolean | null
          jokes_enabled: boolean | null
          quizizz_enabled: boolean | null
          random_task_enabled: boolean | null
        }
        Insert: {
          ai_trivia_enabled?: boolean | null
          created_at?: string | null
          emoji_guess_enabled?: boolean | null
          event_id: string
          ice_breakers_enabled?: boolean | null
          id?: string
          jeopardy_enabled?: boolean | null
          jokes_enabled?: boolean | null
          quizizz_enabled?: boolean | null
          random_task_enabled?: boolean | null
        }
        Update: {
          ai_trivia_enabled?: boolean | null
          created_at?: string | null
          emoji_guess_enabled?: boolean | null
          event_id?: string
          ice_breakers_enabled?: boolean | null
          id?: string
          jeopardy_enabled?: boolean | null
          jokes_enabled?: boolean | null
          quizizz_enabled?: boolean | null
          random_task_enabled?: boolean | null
        }
        Relationships: []
      }
      guest_flow: {
        Row: {
          created_at: string
          event_id: string
          flow_steps: Json
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          event_id: string
          flow_steps: Json
          id?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          event_id?: string
          flow_steps?: Json
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      invites: {
        Row: {
          created_at: string
          email_template: string | null
          event_id: string
          id: string
          long_message: string | null
          short_message: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email_template?: string | null
          event_id: string
          id?: string
          long_message?: string | null
          short_message?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email_template?: string | null
          event_id?: string
          id?: string
          long_message?: string | null
          short_message?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invites_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      kanban_columns: {
        Row: {
          color: string | null
          created_at: string | null
          event_id: string
          id: string
          is_default: boolean | null
          position: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          event_id: string
          id?: string
          is_default?: boolean | null
          position?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          event_id?: string
          id?: string
          is_default?: boolean | null
          position?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kanban_columns_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          color: string
          content: string | null
          created_at: string
          event_id: string
          id: string
          position: number | null
          title: string
          updated_at: string
        }
        Insert: {
          color?: string
          content?: string | null
          created_at?: string
          event_id: string
          id?: string
          position?: number | null
          title?: string
          updated_at?: string
        }
        Update: {
          color?: string
          content?: string | null
          created_at?: string
          event_id?: string
          id?: string
          position?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "notes_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      planner_settings: {
        Row: {
          created_at: string | null
          default_view: string | null
          event_id: string
          id: string
          remove_completed_from_todo: boolean | null
          show_completed_tasks: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          default_view?: string | null
          event_id: string
          id?: string
          remove_completed_from_todo?: boolean | null
          show_completed_tasks?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          default_view?: string | null
          event_id?: string
          id?: string
          remove_completed_from_todo?: boolean | null
          show_completed_tasks?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "planner_settings_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      pricing_plans: {
        Row: {
          balloon_amount: number
          created_at: string | null
          daily_balloons: number
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          price: number
        }
        Insert: {
          balloon_amount?: number
          created_at?: string | null
          daily_balloons?: number
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          price: number
        }
        Update: {
          balloon_amount?: number
          created_at?: string | null
          daily_balloons?: number
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
        }
        Relationships: []
      }
      seatmap_config: {
        Row: {
          blocked_seats: Json | null
          created_at: string
          event_id: string
          has_seatmap: boolean | null
          horizontal_seats: number | null
          id: string
          seatmap_description: string | null
          updated_at: string
          vertical_seats: number | null
        }
        Insert: {
          blocked_seats?: Json | null
          created_at?: string
          event_id: string
          has_seatmap?: boolean | null
          horizontal_seats?: number | null
          id?: string
          seatmap_description?: string | null
          updated_at?: string
          vertical_seats?: number | null
        }
        Update: {
          blocked_seats?: Json | null
          created_at?: string
          event_id?: string
          has_seatmap?: boolean | null
          horizontal_seats?: number | null
          id?: string
          seatmap_description?: string | null
          updated_at?: string
          vertical_seats?: number | null
        }
        Relationships: []
      }
      survey_questions: {
        Row: {
          created_at: string | null
          id: string
          options: Json | null
          position: number
          question_text: string
          question_type: string
          survey_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          options?: Json | null
          position: number
          question_text: string
          question_type: string
          survey_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          options?: Json | null
          position?: number
          question_text?: string
          question_type?: string
          survey_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "survey_questions_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_responses: {
        Row: {
          answers: Json
          completed_at: string | null
          credits_awarded: boolean | null
          id: string
          respondent_id: string | null
          survey_id: string | null
        }
        Insert: {
          answers: Json
          completed_at?: string | null
          credits_awarded?: boolean | null
          id?: string
          respondent_id?: string | null
          survey_id?: string | null
        }
        Update: {
          answers?: Json
          completed_at?: string | null
          credits_awarded?: boolean | null
          id?: string
          respondent_id?: string | null
          survey_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "survey_responses_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      surveys: {
        Row: {
          created_at: string | null
          creator_id: string
          credits_cost: number
          description: string | null
          id: string
          is_published: boolean | null
          title: string
          total_questions: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          creator_id: string
          credits_cost?: number
          description?: string | null
          id?: string
          is_published?: boolean | null
          title: string
          total_questions?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          creator_id?: string
          credits_cost?: number
          description?: string | null
          id?: string
          is_published?: boolean | null
          title?: string
          total_questions?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      task_settings: {
        Row: {
          created_at: string | null
          event_id: string
          id: string
          keep_completed_in_list: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          event_id: string
          id?: string
          keep_completed_in_list?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string
          id?: string
          keep_completed_in_list?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_settings_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: true
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          assigned_to: string | null
          category: string | null
          created_at: string
          description: string | null
          due_date: string | null
          due_time: string | null
          event_id: string
          id: string
          notes: string | null
          position: number | null
          priority: string | null
          start_date: string | null
          start_time: string | null
          status: string
          tags: Json | null
          title: string
          updated_at: string
          url: string | null
        }
        Insert: {
          assigned_to?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          due_time?: string | null
          event_id: string
          id?: string
          notes?: string | null
          position?: number | null
          priority?: string | null
          start_date?: string | null
          start_time?: string | null
          status?: string
          tags?: Json | null
          title: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          assigned_to?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          due_time?: string | null
          event_id?: string
          id?: string
          notes?: string | null
          position?: number | null
          priority?: string | null
          start_date?: string | null
          start_time?: string | null
          status?: string
          tags?: Json | null
          title?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_config: {
        Row: {
          adult_price: number | null
          bg_color: string | null
          child_price: number | null
          created_at: string
          event_id: string
          font_family: string | null
          id: string
          show_qr_code: boolean | null
          text_alignment: string | null
          text_color: string | null
          ticket_color: string | null
          ticket_text: string | null
          updated_at: string
          winner_enabled: boolean | null
        }
        Insert: {
          adult_price?: number | null
          bg_color?: string | null
          child_price?: number | null
          created_at?: string
          event_id: string
          font_family?: string | null
          id?: string
          show_qr_code?: boolean | null
          text_alignment?: string | null
          text_color?: string | null
          ticket_color?: string | null
          ticket_text?: string | null
          updated_at?: string
          winner_enabled?: boolean | null
        }
        Update: {
          adult_price?: number | null
          bg_color?: string | null
          child_price?: number | null
          created_at?: string
          event_id?: string
          font_family?: string | null
          id?: string
          show_qr_code?: boolean | null
          text_alignment?: string | null
          text_color?: string | null
          ticket_color?: string | null
          ticket_text?: string | null
          updated_at?: string
          winner_enabled?: boolean | null
        }
        Relationships: []
      }
      timeline_events: {
        Row: {
          created_at: string
          description: string | null
          duration_minutes: number | null
          event_id: string
          event_time: string
          event_type: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          event_id: string
          event_time: string
          event_type: string
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          event_id?: string
          event_time?: string
          event_type?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "timeline_events_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      timer_settings: {
        Row: {
          background_color: string | null
          created_at: string
          event_id: string
          font_color: string | null
          font_family: string | null
          font_size: number | null
          id: string
          show_days: boolean | null
          show_hours: boolean | null
          show_minutes: boolean | null
          show_months: boolean | null
          show_progress_bar: boolean | null
          show_seconds: boolean | null
          timer_style: string | null
          updated_at: string
        }
        Insert: {
          background_color?: string | null
          created_at?: string
          event_id: string
          font_color?: string | null
          font_family?: string | null
          font_size?: number | null
          id?: string
          show_days?: boolean | null
          show_hours?: boolean | null
          show_minutes?: boolean | null
          show_months?: boolean | null
          show_progress_bar?: boolean | null
          show_seconds?: boolean | null
          timer_style?: string | null
          updated_at?: string
        }
        Update: {
          background_color?: string | null
          created_at?: string
          event_id?: string
          font_color?: string | null
          font_family?: string | null
          font_size?: number | null
          id?: string
          show_days?: boolean | null
          show_hours?: boolean | null
          show_minutes?: boolean | null
          show_months?: boolean | null
          show_progress_bar?: boolean | null
          show_seconds?: boolean | null
          timer_style?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "timer_settings_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: true
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      user_balloons: {
        Row: {
          balance: number
          clerk_user_id: string
          created_at: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          balance?: number
          clerk_user_id: string
          created_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          balance?: number
          clerk_user_id?: string
          created_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          clerk_user_id: string
          created_at: string | null
          has_seen_guest_warning: boolean | null
          id: string
          updated_at: string | null
        }
        Insert: {
          clerk_user_id: string
          created_at?: string | null
          has_seen_guest_warning?: boolean | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          clerk_user_id?: string
          created_at?: string | null
          has_seen_guest_warning?: boolean | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          bio: string | null
          clerk_user_id: string
          company_name: string | null
          company_website: string | null
          created_at: string | null
          email: string
          gender: string | null
          id: string
          language: string | null
          phone_number: string | null
          profile_picture_url: string | null
          profile_type: string | null
          profile_visibility: string | null
          residency_country: string | null
          show_email: boolean | null
          show_name: boolean | null
          show_phone: boolean | null
          updated_at: string | null
          user_id: string | null
          user_role: string | null
          username: string | null
        }
        Insert: {
          bio?: string | null
          clerk_user_id: string
          company_name?: string | null
          company_website?: string | null
          created_at?: string | null
          email: string
          gender?: string | null
          id?: string
          language?: string | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_type?: string | null
          profile_visibility?: string | null
          residency_country?: string | null
          show_email?: boolean | null
          show_name?: boolean | null
          show_phone?: boolean | null
          updated_at?: string | null
          user_id?: string | null
          user_role?: string | null
          username?: string | null
        }
        Update: {
          bio?: string | null
          clerk_user_id?: string
          company_name?: string | null
          company_website?: string | null
          created_at?: string | null
          email?: string
          gender?: string | null
          id?: string
          language?: string | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_type?: string | null
          profile_visibility?: string | null
          residency_country?: string | null
          show_email?: boolean | null
          show_name?: boolean | null
          show_phone?: boolean | null
          updated_at?: string | null
          user_id?: string | null
          user_role?: string | null
          username?: string | null
        }
        Relationships: []
      }
      vendors: {
        Row: {
          availability: string | null
          category: string
          created_at: string | null
          description: string | null
          event_id: string
          id: string
          image_url: string | null
          link: string | null
          name: string
          price: string | null
          rating: string | null
          updated_at: string | null
        }
        Insert: {
          availability?: string | null
          category: string
          created_at?: string | null
          description?: string | null
          event_id: string
          id?: string
          image_url?: string | null
          link?: string | null
          name: string
          price?: string | null
          rating?: string | null
          updated_at?: string | null
        }
        Update: {
          availability?: string | null
          category?: string
          created_at?: string | null
          description?: string | null
          event_id?: string
          id?: string
          image_url?: string | null
          link?: string | null
          name?: string
          price?: string | null
          rating?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendors_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_invite_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
