using Entities;
using DTOs;

namespace Services
{
    public interface IMazalTovService
    {
        Task AddAsync(MazalTovDTO mazalTov);
        Task DeleteAsync(int id);
        Task<IEnumerable<MazalTov>> GetAllAsync();
        Task<MazalTov> GetByIdAsync(int id);
        Task UpdateAsync(MazalTov mazalTov);
    }
}