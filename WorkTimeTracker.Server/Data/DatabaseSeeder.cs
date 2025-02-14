using Microsoft.AspNetCore.Identity;
using Timesheet.Server.Constants.Identity;
using Timesheet.Server.Constants.Permission;
using Timesheet.Server.Helpers;
using Timesheet.Server.Interfaces.Data;
using Timesheet.Server.Models.Identity;

namespace Timesheet.Server.Data;

public class DatabaseSeeder : IDatabaseSeeder
{
    private readonly ILogger<DatabaseSeeder> _logger;
    private readonly ApplicationDbContext _context;
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;

    public DatabaseSeeder(
        ApplicationDbContext context,
        ILogger<DatabaseSeeder> logger,
        UserManager<User> userManager,
        RoleManager<Role> roleManager
    )
    {
        _context = context;
        _logger = logger;
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task Initialize()
    {
        await SeedAdminUser();
        await SeedBasicUsers();
    }

    private async Task SeedAdminUser()
    {
        var adminRoleExits = await _roleManager.RoleExistsAsync(RoleConst.AdministratorRole);

        if (!adminRoleExits)
        {
            var role = new Role
            {
                NormalizedName = RoleConst.AdministratorRole.ToUpper(),
                Name = RoleConst.AdministratorRole
            };
            await _roleManager.CreateAsync(role);

            foreach (var permission in Permissions.GetRegisteredPermissions())
            {
                await _roleManager.AddPermissionClaim(role, permission);
            }
        }

        var adminUserExist = await _userManager.FindByEmailAsync(UserConst.AdministratorUsername);

        if (adminUserExist == null)
        {
            var user = new User
            {
                Email = UserConst.AdministratorUsername,
                UserName = UserConst.AdministratorUsername,
                NormalizedUserName = UserConst.AdministratorUsername.ToUpper(),
                NormalizedEmail = UserConst.AdministratorUsername.ToUpper(),
                FullName = RoleConst.AdministratorRole,
                LockoutEnabled = true,
                SecurityStamp = Guid.NewGuid().ToString(),
                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(user, "Admin123!");
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, RoleConst.AdministratorRole);
                _logger.LogInformation($"✅ Created user {UserConst.AdministratorUsername} with role {RoleConst.AdministratorRole}");
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    _logger.LogError($"❌ Error creating user {UserConst.AdministratorUsername}: {error.Description}");
                }
            }
        }
    }

    private async Task SeedBasicUsers()
    {
        var basicRoleExits = await _roleManager.RoleExistsAsync(RoleConst.BasicRole);

        if (!basicRoleExits)
        {
            var role = new Role
            {
                NormalizedName = RoleConst.BasicRole.ToUpper(),
                Name = RoleConst.BasicRole
            };
            await _roleManager.CreateAsync(role);
        }

        var basicUserExist = await _userManager.FindByEmailAsync("hungnv@wbc.vn");

        if (basicUserExist == null)
        {
            var user = new User
            {
                Email = "hungnv@wbc.vn",
                UserName = "hungnv@wbc.vn",
                NormalizedUserName = "hungnv@wbc.vn".ToUpper(),
                NormalizedEmail = "hungnv@wbc.vn".ToUpper(),
                FullName = RoleConst.BasicRole,
                LockoutEnabled = true,
                SecurityStamp = Guid.NewGuid().ToString(),
                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(user, "Admin123!");
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, RoleConst.BasicRole);
                _logger.LogInformation($"✅ Created user hungnv@wbc.vn with role {RoleConst.BasicRole}");
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    _logger.LogError($"❌ Error creating user hungnv@wbc.vn: {error.Description}");
                }
            }
        }
    }
}
