using Entities;

namespace Services
{
    public interface IMazalTovService
    {
        Task AddAsync(MazalTov mazalTov);
        Task DeleteAsync(int id);
        Task<IEnumerable<MazalTov>> GetAllAsync();
        Task<MazalTov> GetByIdAsync(int id);
        Task UpdateAsync(MazalTov mazalTov);
    }
}