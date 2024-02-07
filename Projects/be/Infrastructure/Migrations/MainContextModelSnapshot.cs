﻿// <auto-generated />
using System;
using Infrastructure.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Infrastructure.Migrations
{
    [DbContext(typeof(MainContext))]
    partial class MainContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Infrastructur.Models.account", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasDefaultValueSql("gen_random_uuid()");

                    b.Property<string>("avatar")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<DateTime>("created_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasMaxLength(254)
                        .HasColumnType("character varying(254)");

                    b.Property<bool>("is_email_confirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("normalized_email")
                        .IsRequired()
                        .HasMaxLength(254)
                        .HasColumnType("character varying(254)");

                    b.HasKey("id")
                        .HasName("account_pkey");

                    b.HasIndex(new[] { "normalized_email" }, "account_normalized_email_key")
                        .IsUnique();

                    b.ToTable("account", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.category", b =>
                {
                    b.Property<string>("id")
                        .HasMaxLength(30)
                        .HasColumnType("character varying(30)");

                    b.Property<bool>("is_bottom_level")
                        .HasColumnType("boolean");

                    b.Property<string>("parent_category_id")
                        .HasMaxLength(30)
                        .HasColumnType("character varying(30)");

                    b.HasKey("id")
                        .HasName("category_pkey");

                    b.HasIndex("parent_category_id");

                    b.ToTable("category", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.comment", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasDefaultValueSql("gen_random_uuid()");

                    b.Property<Guid>("account_id")
                        .HasColumnType("uuid");

                    b.Property<string>("content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("edited_at")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("is_deleted")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("boolean")
                        .HasDefaultValue(false);

                    b.Property<Guid?>("parent_comment_id")
                        .HasColumnType("uuid");

                    b.Property<Guid>("post_id")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("uploaded_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.HasKey("id")
                        .HasName("comment_pkey");

                    b.HasIndex("account_id");

                    b.HasIndex("parent_comment_id");

                    b.HasIndex("post_id");

                    b.ToTable("comment", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.comments_for_post", b =>
                {
                    b.Property<string>("content")
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .HasMaxLength(254)
                        .HasColumnType("character varying(254)");

                    b.Property<Guid?>("id")
                        .HasColumnType("uuid");

                    b.Property<bool?>("is_deleted")
                        .HasColumnType("boolean");

                    b.Property<Guid?>("parent_comment_id")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("post_id")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("uploaded_at")
                        .HasColumnType("timestamp with time zone");

                    b.ToTable((string)null);

                    b.ToView("comments_for_post", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.external_authentication", b =>
                {
                    b.Property<int>("provider_id")
                        .HasColumnType("integer");

                    b.Property<string>("account_id_from_provider")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<Guid>("account_id")
                        .HasColumnType("uuid");

                    b.HasKey("provider_id", "account_id_from_provider")
                        .HasName("external_authentication_pkey");

                    b.HasIndex("account_id");

                    b.HasIndex(new[] { "account_id_from_provider" }, "external_authentication_account_id_from_provider_key")
                        .IsUnique();

                    b.ToTable("external_authentication", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.external_login_provider", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(40)
                        .HasColumnType("character varying(40)");

                    b.HasKey("id")
                        .HasName("external_login_provider_pkey");

                    b.HasIndex(new[] { "name" }, "external_login_provider_name_key")
                        .IsUnique();

                    b.ToTable("external_login_provider", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.hashtag", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(40)
                        .HasColumnType("character varying(40)");

                    b.HasKey("id")
                        .HasName("hashtag_pkey");

                    b.HasIndex(new[] { "name" }, "hashtag_name_key")
                        .IsUnique();

                    b.ToTable("hashtag", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.liked_comment", b =>
                {
                    b.Property<Guid>("comment_id")
                        .HasColumnType("uuid");

                    b.Property<Guid>("account_id")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("created_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.HasKey("comment_id", "account_id")
                        .HasName("liked_comment_pkey");

                    b.HasIndex("account_id");

                    b.ToTable("liked_comment", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.liked_post", b =>
                {
                    b.Property<Guid>("post_id")
                        .HasColumnType("uuid");

                    b.Property<Guid>("account_id")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("created_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.HasKey("post_id", "account_id")
                        .HasName("liked_post_pkey");

                    b.HasIndex("account_id");

                    b.ToTable("liked_post", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.post", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasDefaultValueSql("gen_random_uuid()");

                    b.Property<string>("category_id")
                        .HasMaxLength(30)
                        .HasColumnType("character varying(30)");

                    b.Property<string>("content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("cover")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<DateTime?>("edited_at")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.Property<DateTime>("uploaded_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.HasKey("id")
                        .HasName("post_pkey");

                    b.HasIndex("category_id");

                    b.ToTable("post", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.role", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("character varying(30)");

                    b.HasKey("id")
                        .HasName("role_pkey");

                    b.HasIndex(new[] { "name" }, "role_name_key")
                        .IsUnique();

                    b.ToTable("role", (string)null);
                });

            modelBuilder.Entity("Infrastructure.Models.get_post_likes_has_liked", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("category_id")
                        .HasColumnType("text");

                    b.Property<string>("content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("cover")
                        .HasColumnType("text");

                    b.Property<DateTime?>("edited_at")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("has_liked")
                        .HasColumnType("boolean");

                    b.Property<long>("like_cnt")
                        .HasColumnType("bigint");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("uploaded_at")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("id");

                    b.ToTable("get_post_likes_has_liked");
                });

            modelBuilder.Entity("Infrastructure.Models.get_posts_likes_comments", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("category_id")
                        .HasColumnType("text");

                    b.Property<long>("comment_cnt")
                        .HasColumnType("bigint");

                    b.Property<string>("content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("cover")
                        .HasColumnType("text");

                    b.Property<DateTime?>("edited_at")
                        .HasColumnType("timestamp with time zone");

                    b.Property<long>("like_cnt")
                        .HasColumnType("bigint");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("uploaded_at")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("id");

                    b.ToTable("get_posts_likes_comments");
                });

            modelBuilder.Entity("Infrastructure.Models.get_posts_likes_comments_filted_by_category", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("category_id")
                        .HasColumnType("text");

                    b.Property<long>("comment_cnt")
                        .HasColumnType("bigint");

                    b.Property<string>("content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("cover")
                        .HasColumnType("text");

                    b.Property<DateTime?>("edited_at")
                        .HasColumnType("timestamp with time zone");

                    b.Property<long>("like_cnt")
                        .HasColumnType("bigint");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("uploaded_at")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("id");

                    b.ToTable("get_posts_likes_comments_filted_by_category");
                });

            modelBuilder.Entity("account_role", b =>
                {
                    b.Property<Guid>("account_id")
                        .HasColumnType("uuid");

                    b.Property<int>("role_id")
                        .HasColumnType("integer");

                    b.HasKey("account_id", "role_id")
                        .HasName("account_role_pkey");

                    b.HasIndex("role_id");

                    b.ToTable("account_role", (string)null);
                });

            modelBuilder.Entity("post_hashtag", b =>
                {
                    b.Property<Guid>("post_id")
                        .HasColumnType("uuid");

                    b.Property<int>("hashtag_id")
                        .HasColumnType("integer");

                    b.HasKey("post_id", "hashtag_id")
                        .HasName("post_hashtag_pkey");

                    b.HasIndex("hashtag_id");

                    b.ToTable("post_hashtag", (string)null);
                });

            modelBuilder.Entity("Infrastructur.Models.category", b =>
                {
                    b.HasOne("Infrastructur.Models.category", "parent_category")
                        .WithMany("Inverseparent_category")
                        .HasForeignKey("parent_category_id")
                        .HasConstraintName("category_parent_category_id_fkey");

                    b.Navigation("parent_category");
                });

            modelBuilder.Entity("Infrastructur.Models.comment", b =>
                {
                    b.HasOne("Infrastructur.Models.account", "account")
                        .WithMany("comments")
                        .HasForeignKey("account_id")
                        .OnDelete(DeleteBehavior.SetNull)
                        .IsRequired()
                        .HasConstraintName("comment_account_id_fkey");

                    b.HasOne("Infrastructur.Models.comment", "parent_comment")
                        .WithMany("Inverseparent_comment")
                        .HasForeignKey("parent_comment_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("comment_parent_comment_id_fkey");

                    b.HasOne("Infrastructur.Models.post", "post")
                        .WithMany("comments")
                        .HasForeignKey("post_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("comment_post_id_fkey");

                    b.Navigation("account");

                    b.Navigation("parent_comment");

                    b.Navigation("post");
                });

            modelBuilder.Entity("Infrastructur.Models.external_authentication", b =>
                {
                    b.HasOne("Infrastructur.Models.account", "account")
                        .WithMany("external_authentications")
                        .HasForeignKey("account_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("external_authentication_account_id_fkey");

                    b.HasOne("Infrastructur.Models.external_login_provider", "provider")
                        .WithMany("external_authentications")
                        .HasForeignKey("provider_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("external_authentication_provider_id_fkey");

                    b.Navigation("account");

                    b.Navigation("provider");
                });

            modelBuilder.Entity("Infrastructur.Models.liked_comment", b =>
                {
                    b.HasOne("Infrastructur.Models.account", "account")
                        .WithMany("liked_comments")
                        .HasForeignKey("account_id")
                        .OnDelete(DeleteBehavior.SetNull)
                        .IsRequired()
                        .HasConstraintName("liked_comment_account_id_fkey");

                    b.HasOne("Infrastructur.Models.comment", "comment")
                        .WithMany("liked_comments")
                        .HasForeignKey("comment_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("liked_comment_comment_id_fkey");

                    b.Navigation("account");

                    b.Navigation("comment");
                });

            modelBuilder.Entity("Infrastructur.Models.liked_post", b =>
                {
                    b.HasOne("Infrastructur.Models.account", "account")
                        .WithMany("liked_posts")
                        .HasForeignKey("account_id")
                        .OnDelete(DeleteBehavior.SetNull)
                        .IsRequired()
                        .HasConstraintName("liked_post_account_id_fkey");

                    b.HasOne("Infrastructur.Models.post", "post")
                        .WithMany("liked_posts")
                        .HasForeignKey("post_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("liked_post_post_id_fkey");

                    b.Navigation("account");

                    b.Navigation("post");
                });

            modelBuilder.Entity("Infrastructur.Models.post", b =>
                {
                    b.HasOne("Infrastructur.Models.category", "category")
                        .WithMany("posts")
                        .HasForeignKey("category_id")
                        .HasConstraintName("post_category_id_fkey");

                    b.Navigation("category");
                });

            modelBuilder.Entity("account_role", b =>
                {
                    b.HasOne("Infrastructur.Models.account", null)
                        .WithMany()
                        .HasForeignKey("account_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("account_role_account_id_fkey");

                    b.HasOne("Infrastructur.Models.role", null)
                        .WithMany()
                        .HasForeignKey("role_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("account_role_role_id_fkey");
                });

            modelBuilder.Entity("post_hashtag", b =>
                {
                    b.HasOne("Infrastructur.Models.hashtag", null)
                        .WithMany()
                        .HasForeignKey("hashtag_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("post_hashtag_hashtag_id_fkey");

                    b.HasOne("Infrastructur.Models.post", null)
                        .WithMany()
                        .HasForeignKey("post_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired()
                        .HasConstraintName("post_hashtag_post_id_fkey");
                });

            modelBuilder.Entity("Infrastructur.Models.account", b =>
                {
                    b.Navigation("comments");

                    b.Navigation("external_authentications");

                    b.Navigation("liked_comments");

                    b.Navigation("liked_posts");
                });

            modelBuilder.Entity("Infrastructur.Models.category", b =>
                {
                    b.Navigation("Inverseparent_category");

                    b.Navigation("posts");
                });

            modelBuilder.Entity("Infrastructur.Models.comment", b =>
                {
                    b.Navigation("Inverseparent_comment");

                    b.Navigation("liked_comments");
                });

            modelBuilder.Entity("Infrastructur.Models.external_login_provider", b =>
                {
                    b.Navigation("external_authentications");
                });

            modelBuilder.Entity("Infrastructur.Models.post", b =>
                {
                    b.Navigation("comments");

                    b.Navigation("liked_posts");
                });
#pragma warning restore 612, 618
        }
    }
}
